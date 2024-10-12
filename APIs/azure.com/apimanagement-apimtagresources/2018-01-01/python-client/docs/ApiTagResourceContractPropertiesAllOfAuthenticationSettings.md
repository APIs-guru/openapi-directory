# ApiTagResourceContractPropertiesAllOfAuthenticationSettings

API Authentication Settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**o_auth2** | [**ApiTagResourceContractPropertiesAllOfAuthenticationSettingsOAuth2**](ApiTagResourceContractPropertiesAllOfAuthenticationSettingsOAuth2.md) |  | [optional] 
**openid** | [**ApiTagResourceContractPropertiesAllOfAuthenticationSettingsOpenid**](ApiTagResourceContractPropertiesAllOfAuthenticationSettingsOpenid.md) |  | [optional] 
**subscription_key_required** | **bool** | Specifies whether subscription key is required during call to this API, true - API is included into closed products only, false - API is included into open products alone, null - there is a mix of products. | [optional] 

## Example

```python
from openapi_client.models.api_tag_resource_contract_properties_all_of_authentication_settings import ApiTagResourceContractPropertiesAllOfAuthenticationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTagResourceContractPropertiesAllOfAuthenticationSettings from a JSON string
api_tag_resource_contract_properties_all_of_authentication_settings_instance = ApiTagResourceContractPropertiesAllOfAuthenticationSettings.from_json(json)
# print the JSON string representation of the object
print(ApiTagResourceContractPropertiesAllOfAuthenticationSettings.to_json())

# convert the object into a dict
api_tag_resource_contract_properties_all_of_authentication_settings_dict = api_tag_resource_contract_properties_all_of_authentication_settings_instance.to_dict()
# create an instance of ApiTagResourceContractPropertiesAllOfAuthenticationSettings from a dict
api_tag_resource_contract_properties_all_of_authentication_settings_from_dict = ApiTagResourceContractPropertiesAllOfAuthenticationSettings.from_dict(api_tag_resource_contract_properties_all_of_authentication_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


