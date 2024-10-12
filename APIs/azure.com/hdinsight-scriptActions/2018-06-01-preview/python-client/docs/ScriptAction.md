# ScriptAction

Describes a script action on role on the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the script action. | 
**parameters** | **str** | The parameters for the script provided. | 
**uri** | **str** | The URI to the script. | 

## Example

```python
from openapi_client.models.script_action import ScriptAction

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptAction from a JSON string
script_action_instance = ScriptAction.from_json(json)
# print the JSON string representation of the object
print(ScriptAction.to_json())

# convert the object into a dict
script_action_dict = script_action_instance.to_dict()
# create an instance of ScriptAction from a dict
script_action_from_dict = ScriptAction.from_dict(script_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


