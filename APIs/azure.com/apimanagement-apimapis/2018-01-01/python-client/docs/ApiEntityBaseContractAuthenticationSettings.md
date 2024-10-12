# ApiEntityBaseContractAuthenticationSettings

API Authentication Settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**o_auth2** | [**ApiEntityBaseContractAuthenticationSettingsOAuth2**](ApiEntityBaseContractAuthenticationSettingsOAuth2.md) |  | [optional] 
**openid** | [**ApiEntityBaseContractAuthenticationSettingsOpenid**](ApiEntityBaseContractAuthenticationSettingsOpenid.md) |  | [optional] 
**subscription_key_required** | **bool** | Specifies whether subscription key is required during call to this API, true - API is included into closed products only, false - API is included into open products alone, null - there is a mix of products. | [optional] 

## Example

```python
from openapi_client.models.api_entity_base_contract_authentication_settings import ApiEntityBaseContractAuthenticationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ApiEntityBaseContractAuthenticationSettings from a JSON string
api_entity_base_contract_authentication_settings_instance = ApiEntityBaseContractAuthenticationSettings.from_json(json)
# print the JSON string representation of the object
print(ApiEntityBaseContractAuthenticationSettings.to_json())

# convert the object into a dict
api_entity_base_contract_authentication_settings_dict = api_entity_base_contract_authentication_settings_instance.to_dict()
# create an instance of ApiEntityBaseContractAuthenticationSettings from a dict
api_entity_base_contract_authentication_settings_from_dict = ApiEntityBaseContractAuthenticationSettings.from_dict(api_entity_base_contract_authentication_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


