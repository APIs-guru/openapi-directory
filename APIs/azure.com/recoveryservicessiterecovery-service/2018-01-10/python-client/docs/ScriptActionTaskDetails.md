# ScriptActionTaskDetails

This class represents the script action task details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_primary_side_script** | **bool** | A value indicating whether it is a primary side script or not. | [optional] 
**name** | **str** | The name. | [optional] 
**output** | **str** | The output. | [optional] 
**path** | **str** | The path. | [optional] 

## Example

```python
from openapi_client.models.script_action_task_details import ScriptActionTaskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptActionTaskDetails from a JSON string
script_action_task_details_instance = ScriptActionTaskDetails.from_json(json)
# print the JSON string representation of the object
print(ScriptActionTaskDetails.to_json())

# convert the object into a dict
script_action_task_details_dict = script_action_task_details_instance.to_dict()
# create an instance of ScriptActionTaskDetails from a dict
script_action_task_details_from_dict = ScriptActionTaskDetails.from_dict(script_action_task_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


