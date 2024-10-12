# AgentRegistration

Definition of the agent registration information type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dsc_meta_configuration** | **str** | Gets or sets the dsc meta configuration. | [optional] 
**endpoint** | **str** | Gets or sets the dsc server endpoint. | [optional] 
**id** | **str** | Gets or sets the id. | [optional] 
**keys** | [**AgentRegistrationKeys**](AgentRegistrationKeys.md) |  | [optional] 

## Example

```python
from openapi_client.models.agent_registration import AgentRegistration

# TODO update the JSON string below
json = "{}"
# create an instance of AgentRegistration from a JSON string
agent_registration_instance = AgentRegistration.from_json(json)
# print the JSON string representation of the object
print(AgentRegistration.to_json())

# convert the object into a dict
agent_registration_dict = agent_registration_instance.to_dict()
# create an instance of AgentRegistration from a dict
agent_registration_from_dict = AgentRegistration.from_dict(agent_registration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


