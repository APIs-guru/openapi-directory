# ApiEntityBaseContractAuthenticationSettingsOAuth2

API OAuth2 Authentication settings details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_server_id** | **str** | OAuth authorization server identifier. | [optional] 
**scope** | **str** | operations scope. | [optional] 

## Example

```python
from openapi_client.models.api_entity_base_contract_authentication_settings_o_auth2 import ApiEntityBaseContractAuthenticationSettingsOAuth2

# TODO update the JSON string below
json = "{}"
# create an instance of ApiEntityBaseContractAuthenticationSettingsOAuth2 from a JSON string
api_entity_base_contract_authentication_settings_o_auth2_instance = ApiEntityBaseContractAuthenticationSettingsOAuth2.from_json(json)
# print the JSON string representation of the object
print(ApiEntityBaseContractAuthenticationSettingsOAuth2.to_json())

# convert the object into a dict
api_entity_base_contract_authentication_settings_o_auth2_dict = api_entity_base_contract_authentication_settings_o_auth2_instance.to_dict()
# create an instance of ApiEntityBaseContractAuthenticationSettingsOAuth2 from a dict
api_entity_base_contract_authentication_settings_o_auth2_from_dict = ApiEntityBaseContractAuthenticationSettingsOAuth2.from_dict(api_entity_base_contract_authentication_settings_o_auth2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


