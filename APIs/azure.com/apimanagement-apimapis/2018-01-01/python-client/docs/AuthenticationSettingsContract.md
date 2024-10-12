# AuthenticationSettingsContract

API Authentication Settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**o_auth2** | [**ApiEntityBaseContractAuthenticationSettingsOAuth2**](ApiEntityBaseContractAuthenticationSettingsOAuth2.md) |  | [optional] 
**openid** | [**ApiEntityBaseContractAuthenticationSettingsOpenid**](ApiEntityBaseContractAuthenticationSettingsOpenid.md) |  | [optional] 
**subscription_key_required** | **bool** | Specifies whether subscription key is required during call to this API, true - API is included into closed products only, false - API is included into open products alone, null - there is a mix of products. | [optional] 

## Example

```python
from openapi_client.models.authentication_settings_contract import AuthenticationSettingsContract

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationSettingsContract from a JSON string
authentication_settings_contract_instance = AuthenticationSettingsContract.from_json(json)
# print the JSON string representation of the object
print(AuthenticationSettingsContract.to_json())

# convert the object into a dict
authentication_settings_contract_dict = authentication_settings_contract_instance.to_dict()
# create an instance of AuthenticationSettingsContract from a dict
authentication_settings_contract_from_dict = AuthenticationSettingsContract.from_dict(authentication_settings_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


