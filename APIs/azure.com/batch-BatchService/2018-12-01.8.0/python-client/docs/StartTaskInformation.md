# StartTaskInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_info** | [**TaskContainerExecutionInformation**](TaskContainerExecutionInformation.md) |  | [optional] 
**end_time** | **datetime** | This is the end time of the most recent run of the start task, if that run has completed (even if that run failed and a retry is pending). This element is not present if the start task is currently running. | [optional] 
**exit_code** | **int** | This property is set only if the start task is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the start task (due to timeout, or user termination via the API) you may see an operating system-defined exit code. | [optional] 
**failure_info** | [**TaskFailureInformation**](TaskFailureInformation.md) |  | [optional] 
**last_retry_time** | **datetime** | This element is present only if the task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the task has been restarted for reasons other than retry; for example, if the compute node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not. | [optional] 
**result** | [**TaskExecutionResult**](TaskExecutionResult.md) |  | [optional] 
**retry_count** | **int** | Task application failures (non-zero exit code) are retried, pre-processing errors (the task could not be run) and file upload errors are not retried. The Batch service will retry the task up to the limit specified by the constraints. | 
**start_time** | **datetime** | This value is reset every time the task is restarted or retried (that is, this is the most recent time at which the start task started running). | 
**state** | **str** |  | 

## Example

```python
from openapi_client.models.start_task_information import StartTaskInformation

# TODO update the JSON string below
json = "{}"
# create an instance of StartTaskInformation from a JSON string
start_task_information_instance = StartTaskInformation.from_json(json)
# print the JSON string representation of the object
print(StartTaskInformation.to_json())

# convert the object into a dict
start_task_information_dict = start_task_information_instance.to_dict()
# create an instance of StartTaskInformation from a dict
start_task_information_from_dict = StartTaskInformation.from_dict(start_task_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


