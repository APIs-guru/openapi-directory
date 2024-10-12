# TaskProperties

Task properties of the software update configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | **Dict[str, str]** | Gets or sets the parameters of the task. | [optional] 
**source** | **str** | Gets or sets the name of the runbook. | [optional] 

## Example

```python
from openapi_client.models.task_properties import TaskProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TaskProperties from a JSON string
task_properties_instance = TaskProperties.from_json(json)
# print the JSON string representation of the object
print(TaskProperties.to_json())

# convert the object into a dict
task_properties_dict = task_properties_instance.to_dict()
# create an instance of TaskProperties from a dict
task_properties_from_dict = TaskProperties.from_dict(task_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


