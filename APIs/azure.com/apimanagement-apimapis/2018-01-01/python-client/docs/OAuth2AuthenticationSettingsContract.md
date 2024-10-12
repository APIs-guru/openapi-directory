# OAuth2AuthenticationSettingsContract

API OAuth2 Authentication settings details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_server_id** | **str** | OAuth authorization server identifier. | [optional] 
**scope** | **str** | operations scope. | [optional] 

## Example

```python
from openapi_client.models.o_auth2_authentication_settings_contract import OAuth2AuthenticationSettingsContract

# TODO update the JSON string below
json = "{}"
# create an instance of OAuth2AuthenticationSettingsContract from a JSON string
o_auth2_authentication_settings_contract_instance = OAuth2AuthenticationSettingsContract.from_json(json)
# print the JSON string representation of the object
print(OAuth2AuthenticationSettingsContract.to_json())

# convert the object into a dict
o_auth2_authentication_settings_contract_dict = o_auth2_authentication_settings_contract_instance.to_dict()
# create an instance of OAuth2AuthenticationSettingsContract from a dict
o_auth2_authentication_settings_contract_from_dict = OAuth2AuthenticationSettingsContract.from_dict(o_auth2_authentication_settings_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


