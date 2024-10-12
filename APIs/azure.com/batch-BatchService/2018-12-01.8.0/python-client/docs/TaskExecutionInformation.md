# TaskExecutionInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_info** | [**TaskContainerExecutionInformation**](TaskContainerExecutionInformation.md) |  | [optional] 
**end_time** | **datetime** | This property is set only if the task is in the Completed state. | [optional] 
**exit_code** | **int** | This property is set only if the task is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the task (due to timeout, or user termination via the API) you may see an operating system-defined exit code. | [optional] 
**failure_info** | [**TaskFailureInformation**](TaskFailureInformation.md) |  | [optional] 
**last_requeue_time** | **datetime** | This property is set only if the requeueCount is nonzero. | [optional] 
**last_retry_time** | **datetime** | This element is present only if the task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the task has been restarted for reasons other than retry; for example, if the compute node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not. | [optional] 
**requeue_count** | **int** | When the user removes nodes from a pool (by resizing/shrinking the pool) or when the job is being disabled, the user can specify that running tasks on the nodes be requeued for execution. This count tracks how many times the task has been requeued for these reasons. | 
**result** | [**TaskExecutionResult**](TaskExecutionResult.md) |  | [optional] 
**retry_count** | **int** | Task application failures (non-zero exit code) are retried, pre-processing errors (the task could not be run) and file upload errors are not retried. The Batch service will retry the task up to the limit specified by the constraints. | 
**start_time** | **datetime** | &#39;Running&#39; corresponds to the running state, so if the task specifies resource files or application packages, then the start time reflects the time at which the task started downloading or deploying these. If the task has been restarted or retried, this is the most recent time at which the task started running. This property is present only for tasks that are in the running or completed state. | [optional] 

## Example

```python
from openapi_client.models.task_execution_information import TaskExecutionInformation

# TODO update the JSON string below
json = "{}"
# create an instance of TaskExecutionInformation from a JSON string
task_execution_information_instance = TaskExecutionInformation.from_json(json)
# print the JSON string representation of the object
print(TaskExecutionInformation.to_json())

# convert the object into a dict
task_execution_information_dict = task_execution_information_instance.to_dict()
# create an instance of TaskExecutionInformation from a dict
task_execution_information_from_dict = TaskExecutionInformation.from_dict(task_execution_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


