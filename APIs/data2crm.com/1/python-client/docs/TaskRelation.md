# TaskRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**TaskEntityRelation**](TaskEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.task_relation import TaskRelation

# TODO update the JSON string below
json = "{}"
# create an instance of TaskRelation from a JSON string
task_relation_instance = TaskRelation.from_json(json)
# print the JSON string representation of the object
print(TaskRelation.to_json())

# convert the object into a dict
task_relation_dict = task_relation_instance.to_dict()
# create an instance of TaskRelation from a dict
task_relation_from_dict = TaskRelation.from_dict(task_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


