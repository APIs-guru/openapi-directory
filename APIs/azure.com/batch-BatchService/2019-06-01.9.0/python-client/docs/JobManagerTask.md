# JobManagerTask

The Job Manager Task is automatically started when the Job is created. The Batch service tries to schedule the Job Manager Task before any other Tasks in the Job. When shrinking a Pool, the Batch service tries to preserve Nodes where Job Manager Tasks are running for as long as possible (that is, Compute Nodes running 'normal' Tasks are removed before Compute Nodes running Job Manager Tasks). When a Job Manager Task fails and needs to be restarted, the system tries to schedule it at the highest priority. If there are no idle Compute Nodes available, the system may terminate one of the running Tasks in the Pool and return it to the queue in order to make room for the Job Manager Task to restart. Note that a Job Manager Task in one Job does not have priority over Tasks in other Jobs. Across Jobs, only Job level priorities are observed. For example, if a Job Manager in a priority 0 Job needs to be restarted, it will not displace Tasks of a priority 1 Job. Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_low_priority_node** | **bool** | The default value is true. | [optional] 
**application_package_references** | [**List[ApplicationPackageReference]**](ApplicationPackageReference.md) | Application Packages are downloaded and deployed to a shared directory, not the Task working directory. Therefore, if a referenced Application Package is already on the Compute Node, and is up to date, then it is not re-downloaded; the existing copy on the Compute Node is used. If a referenced Application Package cannot be installed, for example because the package has been deleted or because download failed, the Task fails. | [optional] 
**authentication_token_settings** | [**AuthenticationTokenSettings**](AuthenticationTokenSettings.md) |  | [optional] 
**command_line** | **str** | The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using \&quot;cmd /c MyCommand\&quot; in Windows or \&quot;/bin/sh -c MyCommand\&quot; in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). | 
**constraints** | [**TaskConstraints**](TaskConstraints.md) |  | [optional] 
**container_settings** | [**TaskContainerSettings**](TaskContainerSettings.md) |  | [optional] 
**display_name** | **str** | It need not be unique and can contain any Unicode characters up to a maximum length of 1024. | [optional] 
**environment_settings** | [**List[EnvironmentSetting]**](EnvironmentSetting.md) |  | [optional] 
**id** | **str** | The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. | 
**kill_job_on_completion** | **bool** | If true, when the Job Manager Task completes, the Batch service marks the Job as complete. If any Tasks are still running at this time (other than Job Release), those Tasks are terminated. If false, the completion of the Job Manager Task does not affect the Job status. In this case, you should either use the onAllTasksComplete attribute to terminate the Job, or have a client or user terminate the Job explicitly. An example of this is if the Job Manager creates a set of Tasks but then takes no further role in their execution. The default value is true. If you are using the onAllTasksComplete and onTaskFailure attributes to control Job lifetime, and using the Job Manager Task only to create the Tasks for the Job (not to monitor progress), then it is important to set killJobOnCompletion to false. | [optional] 
**output_files** | [**List[OutputFile]**](OutputFile.md) | For multi-instance Tasks, the files will only be uploaded from the Compute Node on which the primary Task is executed. | [optional] 
**resource_files** | [**List[ResourceFile]**](ResourceFile.md) | Files listed under this element are located in the Task&#39;s working directory. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. | [optional] 
**run_exclusive** | **bool** | If true, no other Tasks will run on the same Node for as long as the Job Manager is running. If false, other Tasks can run simultaneously with the Job Manager on a Compute Node. The Job Manager Task counts normally against the Compute Node&#39;s concurrent Task limit, so this is only relevant if the Compute Node allows multiple concurrent Tasks. The default value is true. | [optional] 
**user_identity** | [**UserIdentity**](UserIdentity.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_manager_task import JobManagerTask

# TODO update the JSON string below
json = "{}"
# create an instance of JobManagerTask from a JSON string
job_manager_task_instance = JobManagerTask.from_json(json)
# print the JSON string representation of the object
print(JobManagerTask.to_json())

# convert the object into a dict
job_manager_task_dict = job_manager_task_instance.to_dict()
# create an instance of JobManagerTask from a dict
job_manager_task_from_dict = JobManagerTask.from_dict(job_manager_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


