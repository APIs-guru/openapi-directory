# TaskInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_info** | [**TaskExecutionInformation**](TaskExecutionInformation.md) |  | [optional] 
**job_id** | **str** |  | [optional] 
**subtask_id** | **int** |  | [optional] 
**task_id** | **str** |  | [optional] 
**task_state** | [**TaskState**](TaskState.md) |  | 
**task_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.task_information import TaskInformation

# TODO update the JSON string below
json = "{}"
# create an instance of TaskInformation from a JSON string
task_information_instance = TaskInformation.from_json(json)
# print the JSON string representation of the object
print(TaskInformation.to_json())

# convert the object into a dict
task_information_dict = task_information_instance.to_dict()
# create an instance of TaskInformation from a dict
task_information_from_dict = TaskInformation.from_dict(task_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


