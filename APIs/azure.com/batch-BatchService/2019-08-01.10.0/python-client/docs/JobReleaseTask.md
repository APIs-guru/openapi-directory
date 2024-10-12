# JobReleaseTask

The Job Release Task runs when the Job ends, because of one of the following: The user calls the Terminate Job API, or the Delete Job API while the Job is still active, the Job's maximum wall clock time constraint is reached, and the Job is still active, or the Job's Job Manager Task completed, and the Job is configured to terminate when the Job Manager completes. The Job Release Task runs on each Node where Tasks of the Job have run and the Job Preparation Task ran and completed. If you reimage a Node after it has run the Job Preparation Task, and the Job ends without any further Tasks of the Job running on that Node (and hence the Job Preparation Task does not re-run), then the Job Release Task does not run on that Compute Node. If a Node reboots while the Job Release Task is still running, the Job Release Task runs again when the Compute Node starts up. The Job is not marked as complete until all Job Release Tasks have completed. The Job Release Task runs in the background. It does not occupy a scheduling slot; that is, it does not count towards the maxTasksPerNode limit specified on the Pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line** | **str** | The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using \&quot;cmd /c MyCommand\&quot; in Windows or \&quot;/bin/sh -c MyCommand\&quot; in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). | 
**container_settings** | [**TaskContainerSettings**](TaskContainerSettings.md) |  | [optional] 
**environment_settings** | [**List[EnvironmentSetting]**](EnvironmentSetting.md) |  | [optional] 
**id** | **str** | The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. If you do not specify this property, the Batch service assigns a default value of &#39;jobrelease&#39;. No other Task in the Job can have the same ID as the Job Release Task. If you try to submit a Task with the same id, the Batch service rejects the request with error code TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the HTTP status code is 409 (Conflict). | [optional] 
**max_wall_clock_time** | **str** |  | [optional] 
**resource_files** | [**List[ResourceFile]**](ResourceFile.md) | Files listed under this element are located in the Task&#39;s working directory. | [optional] 
**retention_time** | **str** | The default is 7 days, i.e. the Task directory will be retained for 7 days unless the Compute Node is removed or the Job is deleted. | [optional] 
**user_identity** | [**UserIdentity**](UserIdentity.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_release_task import JobReleaseTask

# TODO update the JSON string below
json = "{}"
# create an instance of JobReleaseTask from a JSON string
job_release_task_instance = JobReleaseTask.from_json(json)
# print the JSON string representation of the object
print(JobReleaseTask.to_json())

# convert the object into a dict
job_release_task_dict = job_release_task_instance.to_dict()
# create an instance of JobReleaseTask from a dict
job_release_task_from_dict = JobReleaseTask.from_dict(job_release_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


