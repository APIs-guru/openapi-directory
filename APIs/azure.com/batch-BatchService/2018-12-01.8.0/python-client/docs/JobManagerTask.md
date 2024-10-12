# JobManagerTask

The Job Manager task is automatically started when the job is created. The Batch service tries to schedule the Job Manager task before any other tasks in the job. When shrinking a pool, the Batch service tries to preserve compute nodes where Job Manager tasks are running for as long as possible (that is, nodes running 'normal' tasks are removed before nodes running Job Manager tasks). When a Job Manager task fails and needs to be restarted, the system tries to schedule it at the highest priority. If there are no idle nodes available, the system may terminate one of the running tasks in the pool and return it to the queue in order to make room for the Job Manager task to restart. Note that a Job Manager task in one job does not have priority over tasks in other jobs. Across jobs, only job level priorities are observed. For example, if a Job Manager in a priority 0 job needs to be restarted, it will not displace tasks of a priority 1 job. Batch will retry tasks when a recovery operation is triggered on a compute node. Examples of recovery operations include (but are not limited to) when an unhealthy compute node is rebooted or a compute node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all tasks should be idempotent. This means tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running tasks is to use some form of checkpointing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_low_priority_node** | **bool** | The default value is true. | [optional] 
**application_package_references** | [**List[ApplicationPackageReference]**](ApplicationPackageReference.md) | Application packages are downloaded and deployed to a shared directory, not the task working directory. Therefore, if a referenced package is already on the compute node, and is up to date, then it is not re-downloaded; the existing copy on the compute node is used. If a referenced application package cannot be installed, for example because the package has been deleted or because download failed, the task fails. | [optional] 
**authentication_token_settings** | [**AuthenticationTokenSettings**](AuthenticationTokenSettings.md) |  | [optional] 
**command_line** | **str** | The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using \&quot;cmd /c MyCommand\&quot; in Windows or \&quot;/bin/sh -c MyCommand\&quot; in Linux. If the command line refers to file paths, it should use a relative path (relative to the task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). | 
**constraints** | [**TaskConstraints**](TaskConstraints.md) |  | [optional] 
**container_settings** | [**TaskContainerSettings**](TaskContainerSettings.md) |  | [optional] 
**display_name** | **str** | It need not be unique and can contain any Unicode characters up to a maximum length of 1024. | [optional] 
**environment_settings** | [**List[EnvironmentSetting]**](EnvironmentSetting.md) |  | [optional] 
**id** | **str** | The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. | 
**kill_job_on_completion** | **bool** | If true, when the Job Manager task completes, the Batch service marks the job as complete. If any tasks are still running at this time (other than Job Release), those tasks are terminated. If false, the completion of the Job Manager task does not affect the job status. In this case, you should either use the onAllTasksComplete attribute to terminate the job, or have a client or user terminate the job explicitly. An example of this is if the Job Manager creates a set of tasks but then takes no further role in their execution. The default value is true. If you are using the onAllTasksComplete and onTaskFailure attributes to control job lifetime, and using the Job Manager task only to create the tasks for the job (not to monitor progress), then it is important to set killJobOnCompletion to false. | [optional] 
**output_files** | [**List[OutputFile]**](OutputFile.md) | For multi-instance tasks, the files will only be uploaded from the compute node on which the primary task is executed. | [optional] 
**resource_files** | [**List[ResourceFile]**](ResourceFile.md) | Files listed under this element are located in the task&#39;s working directory. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. | [optional] 
**run_exclusive** | **bool** | If true, no other tasks will run on the same compute node for as long as the Job Manager is running. If false, other tasks can run simultaneously with the Job Manager on a compute node. The Job Manager task counts normally against the node&#39;s concurrent task limit, so this is only relevant if the node allows multiple concurrent tasks. The default value is true. | [optional] 
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


