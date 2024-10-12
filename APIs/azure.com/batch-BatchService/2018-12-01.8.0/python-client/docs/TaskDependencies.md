# TaskDependencies


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_id_ranges** | [**List[TaskIdRange]**](TaskIdRange.md) |  | [optional] 
**task_ids** | **List[str]** | The taskIds collection is limited to 64000 characters total (i.e. the combined length of all task IDs). If the taskIds collection exceeds the maximum length, the Add Task request fails with error code TaskDependencyListTooLong. In this case consider using task ID ranges instead. | [optional] 

## Example

```python
from openapi_client.models.task_dependencies import TaskDependencies

# TODO update the JSON string below
json = "{}"
# create an instance of TaskDependencies from a JSON string
task_dependencies_instance = TaskDependencies.from_json(json)
# print the JSON string representation of the object
print(TaskDependencies.to_json())

# convert the object into a dict
task_dependencies_dict = task_dependencies_instance.to_dict()
# create an instance of TaskDependencies from a dict
task_dependencies_from_dict = TaskDependencies.from_dict(task_dependencies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


