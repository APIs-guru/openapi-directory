# OpenIdAuthenticationSettingsContract

API OAuth2 Authentication settings details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bearer_token_sending_methods** | **List[str]** | How to send token to the server. | [optional] 
**openid_provider_id** | **str** | OAuth authorization server identifier. | [optional] 

## Example

```python
from openapi_client.models.open_id_authentication_settings_contract import OpenIdAuthenticationSettingsContract

# TODO update the JSON string below
json = "{}"
# create an instance of OpenIdAuthenticationSettingsContract from a JSON string
open_id_authentication_settings_contract_instance = OpenIdAuthenticationSettingsContract.from_json(json)
# print the JSON string representation of the object
print(OpenIdAuthenticationSettingsContract.to_json())

# convert the object into a dict
open_id_authentication_settings_contract_dict = open_id_authentication_settings_contract_instance.to_dict()
# create an instance of OpenIdAuthenticationSettingsContract from a dict
open_id_authentication_settings_contract_from_dict = OpenIdAuthenticationSettingsContract.from_dict(open_id_authentication_settings_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


