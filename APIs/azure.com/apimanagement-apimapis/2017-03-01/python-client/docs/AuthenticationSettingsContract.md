# AuthenticationSettingsContract

API Authentication Settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**o_auth2** | [**ApiContractPropertiesAllOfAuthenticationSettingsOAuth2**](ApiContractPropertiesAllOfAuthenticationSettingsOAuth2.md) |  | [optional] 

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


