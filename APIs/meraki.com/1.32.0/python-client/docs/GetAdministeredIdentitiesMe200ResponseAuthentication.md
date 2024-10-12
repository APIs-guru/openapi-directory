# GetAdministeredIdentitiesMe200ResponseAuthentication

Authentication info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | [**GetAdministeredIdentitiesMe200ResponseAuthenticationApi**](GetAdministeredIdentitiesMe200ResponseAuthenticationApi.md) |  | [optional] 
**mode** | **str** | Authentication mode | [optional] 
**saml** | [**GetAdministeredIdentitiesMe200ResponseAuthenticationSaml**](GetAdministeredIdentitiesMe200ResponseAuthenticationSaml.md) |  | [optional] 
**two_factor** | [**GetAdministeredIdentitiesMe200ResponseAuthenticationTwoFactor**](GetAdministeredIdentitiesMe200ResponseAuthenticationTwoFactor.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_administered_identities_me200_response_authentication import GetAdministeredIdentitiesMe200ResponseAuthentication

# TODO update the JSON string below
json = "{}"
# create an instance of GetAdministeredIdentitiesMe200ResponseAuthentication from a JSON string
get_administered_identities_me200_response_authentication_instance = GetAdministeredIdentitiesMe200ResponseAuthentication.from_json(json)
# print the JSON string representation of the object
print(GetAdministeredIdentitiesMe200ResponseAuthentication.to_json())

# convert the object into a dict
get_administered_identities_me200_response_authentication_dict = get_administered_identities_me200_response_authentication_instance.to_dict()
# create an instance of GetAdministeredIdentitiesMe200ResponseAuthentication from a dict
get_administered_identities_me200_response_authentication_from_dict = GetAdministeredIdentitiesMe200ResponseAuthentication.from_dict(get_administered_identities_me200_response_authentication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


