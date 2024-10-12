# AgentRegistrationInformationGetDefaultResponse

Error response of an operation failure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.agent_registration_information_get_default_response import AgentRegistrationInformationGetDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AgentRegistrationInformationGetDefaultResponse from a JSON string
agent_registration_information_get_default_response_instance = AgentRegistrationInformationGetDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(AgentRegistrationInformationGetDefaultResponse.to_json())

# convert the object into a dict
agent_registration_information_get_default_response_dict = agent_registration_information_get_default_response_instance.to_dict()
# create an instance of AgentRegistrationInformationGetDefaultResponse from a dict
agent_registration_information_get_default_response_from_dict = AgentRegistrationInformationGetDefaultResponse.from_dict(agent_registration_information_get_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


