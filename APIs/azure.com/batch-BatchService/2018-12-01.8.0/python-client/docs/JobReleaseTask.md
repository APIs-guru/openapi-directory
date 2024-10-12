# JobReleaseTask

The Job Release task runs when the job ends, because of one of the following: The user calls the Terminate Job API, or the Delete Job API while the job is still active, the job's maximum wall clock time constraint is reached, and the job is still active, or the job's Job Manager task completed, and the job is configured to terminate when the Job Manager completes. The Job Release task runs on each compute node where tasks of the job have run and the Job Preparation task ran and completed. If you reimage a compute node after it has run the Job Preparation task, and the job ends without any further tasks of the job running on that compute node (and hence the Job Preparation task does not re-run), then the Job Release task does not run on that node. If a compute node reboots while the Job Release task is still running, the Job Release task runs again when the compute node starts up. The job is not marked as complete until all Job Release tasks have completed. The Job Release task runs in the background. It does not occupy a scheduling slot; that is, it does not count towards the maxTasksPerNode limit specified on the pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line** | **str** | The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using \&quot;cmd /c MyCommand\&quot; in Windows or \&quot;/bin/sh -c MyCommand\&quot; in Linux. If the command line refers to file paths, it should use a relative path (relative to the task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). | 
**container_settings** | [**TaskContainerSettings**](TaskContainerSettings.md) |  | [optional] 
**environment_settings** | [**List[EnvironmentSetting]**](EnvironmentSetting.md) |  | [optional] 
**id** | **str** | The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. If you do not specify this property, the Batch service assigns a default value of &#39;jobrelease&#39;. No other task in the job can have the same ID as the Job Release task. If you try to submit a task with the same id, the Batch service rejects the request with error code TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the HTTP status code is 409 (Conflict). | [optional] 
**max_wall_clock_time** | **str** |  | [optional] 
**resource_files** | [**List[ResourceFile]**](ResourceFile.md) | Files listed under this element are located in the task&#39;s working directory. | [optional] 
**retention_time** | **str** | The default is 7 days, i.e. the task directory will be retained for 7 days unless the compute node is removed or the job is deleted. | [optional] 
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


