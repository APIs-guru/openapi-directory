# SubtaskInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_info** | [**TaskContainerExecutionInformation**](TaskContainerExecutionInformation.md) |  | [optional] 
**end_time** | **datetime** | This property is set only if the subtask is in the Completed state. | [optional] 
**exit_code** | **int** | This property is set only if the subtask is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the subtask (due to timeout, or user termination via the API) you may see an operating system-defined exit code. | [optional] 
**failure_info** | [**TaskFailureInformation**](TaskFailureInformation.md) |  | [optional] 
**id** | **int** |  | [optional] 
**node_info** | [**ComputeNodeInformation**](ComputeNodeInformation.md) |  | [optional] 
**previous_state** | [**SubtaskState**](SubtaskState.md) |  | [optional] 
**previous_state_transition_time** | **datetime** | This property is not set if the subtask is in its initial running state. | [optional] 
**result** | [**TaskExecutionResult**](TaskExecutionResult.md) |  | [optional] 
**start_time** | **datetime** |  | [optional] 
**state** | [**SubtaskState**](SubtaskState.md) |  | [optional] 
**state_transition_time** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.subtask_information import SubtaskInformation

# TODO update the JSON string below
json = "{}"
# create an instance of SubtaskInformation from a JSON string
subtask_information_instance = SubtaskInformation.from_json(json)
# print the JSON string representation of the object
print(SubtaskInformation.to_json())

# convert the object into a dict
subtask_information_dict = subtask_information_instance.to_dict()
# create an instance of SubtaskInformation from a dict
subtask_information_from_dict = SubtaskInformation.from_dict(subtask_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


