# ApiTagResourceContractPropertiesAllOfAuthenticationSettingsOAuth2

API OAuth2 Authentication settings details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_server_id** | **str** | OAuth authorization server identifier. | [optional] 
**scope** | **str** | operations scope. | [optional] 

## Example

```python
from openapi_client.models.api_tag_resource_contract_properties_all_of_authentication_settings_o_auth2 import ApiTagResourceContractPropertiesAllOfAuthenticationSettingsOAuth2

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTagResourceContractPropertiesAllOfAuthenticationSettingsOAuth2 from a JSON string
api_tag_resource_contract_properties_all_of_authentication_settings_o_auth2_instance = ApiTagResourceContractPropertiesAllOfAuthenticationSettingsOAuth2.from_json(json)
# print the JSON string representation of the object
print(ApiTagResourceContractPropertiesAllOfAuthenticationSettingsOAuth2.to_json())

# convert the object into a dict
api_tag_resource_contract_properties_all_of_authentication_settings_o_auth2_dict = api_tag_resource_contract_properties_all_of_authentication_settings_o_auth2_instance.to_dict()
# create an instance of ApiTagResourceContractPropertiesAllOfAuthenticationSettingsOAuth2 from a dict
api_tag_resource_contract_properties_all_of_authentication_settings_o_auth2_from_dict = ApiTagResourceContractPropertiesAllOfAuthenticationSettingsOAuth2.from_dict(api_tag_resource_contract_properties_all_of_authentication_settings_o_auth2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


