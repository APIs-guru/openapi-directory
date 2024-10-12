# AgentRegistrationKeys

Definition of the agent registration keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | **str** | Gets or sets the primary key. | [optional] 
**secondary** | **str** | Gets or sets the secondary key. | [optional] 

## Example

```python
from openapi_client.models.agent_registration_keys import AgentRegistrationKeys

# TODO update the JSON string below
json = "{}"
# create an instance of AgentRegistrationKeys from a JSON string
agent_registration_keys_instance = AgentRegistrationKeys.from_json(json)
# print the JSON string representation of the object
print(AgentRegistrationKeys.to_json())

# convert the object into a dict
agent_registration_keys_dict = agent_registration_keys_instance.to_dict()
# create an instance of AgentRegistrationKeys from a dict
agent_registration_keys_from_dict = AgentRegistrationKeys.from_dict(agent_registration_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


