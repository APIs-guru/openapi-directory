# TaskListResult

The collection of tasks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI that can be used to request the next set of paged results. | [optional] 
**value** | [**List[Task]**](Task.md) | The collection value. | [optional] 

## Example

```python
from openapi_client.models.task_list_result import TaskListResult

# TODO update the JSON string below
json = "{}"
# create an instance of TaskListResult from a JSON string
task_list_result_instance = TaskListResult.from_json(json)
# print the JSON string representation of the object
print(TaskListResult.to_json())

# convert the object into a dict
task_list_result_dict = task_list_result_instance.to_dict()
# create an instance of TaskListResult from a dict
task_list_result_from_dict = TaskListResult.from_dict(task_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


