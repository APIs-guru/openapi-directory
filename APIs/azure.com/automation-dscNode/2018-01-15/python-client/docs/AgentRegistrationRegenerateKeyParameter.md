# AgentRegistrationRegenerateKeyParameter

The parameters supplied to the regenerate keys operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_name** | **str** | Gets or sets the agent registration key name - primary or secondary. | 

## Example

```python
from openapi_client.models.agent_registration_regenerate_key_parameter import AgentRegistrationRegenerateKeyParameter

# TODO update the JSON string below
json = "{}"
# create an instance of AgentRegistrationRegenerateKeyParameter from a JSON string
agent_registration_regenerate_key_parameter_instance = AgentRegistrationRegenerateKeyParameter.from_json(json)
# print the JSON string representation of the object
print(AgentRegistrationRegenerateKeyParameter.to_json())

# convert the object into a dict
agent_registration_regenerate_key_parameter_dict = agent_registration_regenerate_key_parameter_instance.to_dict()
# create an instance of AgentRegistrationRegenerateKeyParameter from a dict
agent_registration_regenerate_key_parameter_from_dict = AgentRegistrationRegenerateKeyParameter.from_dict(agent_registration_regenerate_key_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


