# RuntimeScriptAction

Describes a script action on a running cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | The application name of the script action, if any. | [optional] [readonly] 
**name** | **str** | The name of the script action. | 
**parameters** | **str** | The parameters for the script | [optional] 
**roles** | **List[str]** | The list of roles where script will be executed. | 
**uri** | **str** | The URI to the script. | 

## Example

```python
from openapi_client.models.runtime_script_action import RuntimeScriptAction

# TODO update the JSON string below
json = "{}"
# create an instance of RuntimeScriptAction from a JSON string
runtime_script_action_instance = RuntimeScriptAction.from_json(json)
# print the JSON string representation of the object
print(RuntimeScriptAction.to_json())

# convert the object into a dict
runtime_script_action_dict = runtime_script_action_instance.to_dict()
# create an instance of RuntimeScriptAction from a dict
runtime_script_action_from_dict = RuntimeScriptAction.from_dict(runtime_script_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


