# SetTriggerStateActionDefinition

The set trigger state action definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**WorkflowTrigger**](WorkflowTrigger.md) |  | 

## Example

```python
from openapi_client.models.set_trigger_state_action_definition import SetTriggerStateActionDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of SetTriggerStateActionDefinition from a JSON string
set_trigger_state_action_definition_instance = SetTriggerStateActionDefinition.from_json(json)
# print the JSON string representation of the object
print(SetTriggerStateActionDefinition.to_json())

# convert the object into a dict
set_trigger_state_action_definition_dict = set_trigger_state_action_definition_instance.to_dict()
# create an instance of SetTriggerStateActionDefinition from a dict
set_trigger_state_action_definition_from_dict = SetTriggerStateActionDefinition.from_dict(set_trigger_state_action_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


