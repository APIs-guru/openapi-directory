# TaskEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Created At | [optional] 
**description** | **str** | Description | [optional] 
**due_at** | **datetime** | Due At | [optional] 
**ended_at** | **datetime** | Ended At | [optional] 
**id** | **str** | Task Identifier | [optional] 
**priority** | **str** | Priority | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**reminder_at** | **datetime** | Remainder At | [optional] 
**started_at** | **datetime** | Started At | [optional] 
**status** | **str** | Status | [optional] 
**subject** | **str** | Name | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.task_entity import TaskEntity

# TODO update the JSON string below
json = "{}"
# create an instance of TaskEntity from a JSON string
task_entity_instance = TaskEntity.from_json(json)
# print the JSON string representation of the object
print(TaskEntity.to_json())

# convert the object into a dict
task_entity_dict = task_entity_instance.to_dict()
# create an instance of TaskEntity from a dict
task_entity_from_dict = TaskEntity.from_dict(task_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


