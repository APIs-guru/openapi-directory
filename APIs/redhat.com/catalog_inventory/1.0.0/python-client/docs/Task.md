# Task


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived_at** | **datetime** |  | [optional] [readonly] 
**child_task_id** | **str** |  | [optional] [readonly] 
**completed_at** | **datetime** |  | [optional] 
**controller_message_id** | **str** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [optional] [readonly] 
**id** | **str** | UUID of task | [optional] [readonly] 
**input** | **object** |  | [optional] [readonly] 
**message** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**output** | **object** |  | [optional] 
**owner** | **str** |  | [optional] [readonly] 
**source_id** | **str** | ID of the resource | [optional] [readonly] 
**state** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**target_source_ref** | **str** |  | [optional] 
**target_type** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.task import Task

# TODO update the JSON string below
json = "{}"
# create an instance of Task from a JSON string
task_instance = Task.from_json(json)
# print the JSON string representation of the object
print(Task.to_json())

# convert the object into a dict
task_dict = task_instance.to_dict()
# create an instance of Task from a dict
task_from_dict = Task.from_dict(task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


