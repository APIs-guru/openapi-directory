# ApiContractPropertiesAllOfAuthenticationSettings

API Authentication Settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**o_auth2** | [**ApiContractPropertiesAllOfAuthenticationSettingsOAuth2**](ApiContractPropertiesAllOfAuthenticationSettingsOAuth2.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_contract_properties_all_of_authentication_settings import ApiContractPropertiesAllOfAuthenticationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ApiContractPropertiesAllOfAuthenticationSettings from a JSON string
api_contract_properties_all_of_authentication_settings_instance = ApiContractPropertiesAllOfAuthenticationSettings.from_json(json)
# print the JSON string representation of the object
print(ApiContractPropertiesAllOfAuthenticationSettings.to_json())

# convert the object into a dict
api_contract_properties_all_of_authentication_settings_dict = api_contract_properties_all_of_authentication_settings_instance.to_dict()
# create an instance of ApiContractPropertiesAllOfAuthenticationSettings from a dict
api_contract_properties_all_of_authentication_settings_from_dict = ApiContractPropertiesAllOfAuthenticationSettings.from_dict(api_contract_properties_all_of_authentication_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


