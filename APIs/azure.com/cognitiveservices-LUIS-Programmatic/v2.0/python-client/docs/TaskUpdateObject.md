# TaskUpdateObject

Object model for cloning an application's version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | The new version for the cloned model. | [optional] 

## Example

```python
from openapi_client.models.task_update_object import TaskUpdateObject

# TODO update the JSON string below
json = "{}"
# create an instance of TaskUpdateObject from a JSON string
task_update_object_instance = TaskUpdateObject.from_json(json)
# print the JSON string representation of the object
print(TaskUpdateObject.to_json())

# convert the object into a dict
task_update_object_dict = task_update_object_instance.to_dict()
# create an instance of TaskUpdateObject from a dict
task_update_object_from_dict = TaskUpdateObject.from_dict(task_update_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


