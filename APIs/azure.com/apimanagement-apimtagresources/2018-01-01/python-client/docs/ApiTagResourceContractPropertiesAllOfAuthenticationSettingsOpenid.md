# ApiTagResourceContractPropertiesAllOfAuthenticationSettingsOpenid

API OAuth2 Authentication settings details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bearer_token_sending_methods** | **List[str]** | How to send token to the server. | [optional] 
**openid_provider_id** | **str** | OAuth authorization server identifier. | [optional] 

## Example

```python
from openapi_client.models.api_tag_resource_contract_properties_all_of_authentication_settings_openid import ApiTagResourceContractPropertiesAllOfAuthenticationSettingsOpenid

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTagResourceContractPropertiesAllOfAuthenticationSettingsOpenid from a JSON string
api_tag_resource_contract_properties_all_of_authentication_settings_openid_instance = ApiTagResourceContractPropertiesAllOfAuthenticationSettingsOpenid.from_json(json)
# print the JSON string representation of the object
print(ApiTagResourceContractPropertiesAllOfAuthenticationSettingsOpenid.to_json())

# convert the object into a dict
api_tag_resource_contract_properties_all_of_authentication_settings_openid_dict = api_tag_resource_contract_properties_all_of_authentication_settings_openid_instance.to_dict()
# create an instance of ApiTagResourceContractPropertiesAllOfAuthenticationSettingsOpenid from a dict
api_tag_resource_contract_properties_all_of_authentication_settings_openid_from_dict = ApiTagResourceContractPropertiesAllOfAuthenticationSettingsOpenid.from_dict(api_tag_resource_contract_properties_all_of_authentication_settings_openid_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


