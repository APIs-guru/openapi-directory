# TaskGroupStatus

Aggregated task status for a TaskGroup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counts** | **Dict[str, str]** | Count of task in each state in the TaskGroup. The map key is task state name. | [optional] 
**instances** | [**List[InstanceStatus]**](InstanceStatus.md) | Status of instances allocated for the TaskGroup. | [optional] 

## Example

```python
from openapi_client.models.task_group_status import TaskGroupStatus

# TODO update the JSON string below
json = "{}"
# create an instance of TaskGroupStatus from a JSON string
task_group_status_instance = TaskGroupStatus.from_json(json)
# print the JSON string representation of the object
print(TaskGroupStatus.to_json())

# convert the object into a dict
task_group_status_dict = task_group_status_instance.to_dict()
# create an instance of TaskGroupStatus from a dict
task_group_status_from_dict = TaskGroupStatus.from_dict(task_group_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


