# ScriptActionPersistedGetResponseSpec

The persisted script action for cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | The application name for the script action. | [optional] 
**name** | **str** | The name of script action. | [optional] 
**parameters** | **str** | The parameters for the script provided. | [optional] 
**roles** | **List[str]** | The list of roles where script will be executed. | [optional] 
**uri** | **str** | The URI to the script. | [optional] 

## Example

```python
from openapi_client.models.script_action_persisted_get_response_spec import ScriptActionPersistedGetResponseSpec

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptActionPersistedGetResponseSpec from a JSON string
script_action_persisted_get_response_spec_instance = ScriptActionPersistedGetResponseSpec.from_json(json)
# print the JSON string representation of the object
print(ScriptActionPersistedGetResponseSpec.to_json())

# convert the object into a dict
script_action_persisted_get_response_spec_dict = script_action_persisted_get_response_spec_instance.to_dict()
# create an instance of ScriptActionPersistedGetResponseSpec from a dict
script_action_persisted_get_response_spec_from_dict = ScriptActionPersistedGetResponseSpec.from_dict(script_action_persisted_get_response_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


