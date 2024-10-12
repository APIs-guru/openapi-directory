# IdentityProviderListByService200ResponseValueInnerProperties

The external Identity Providers like Facebook, Google, Microsoft, Twitter or Azure Active Directory which can be used to enable access to the API Management service developer portal for all users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft. | 
**client_secret** | **str** | Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft. This property will not be filled on &#39;GET&#39; operations! Use &#39;/listSecrets&#39; POST request to get the value. | [optional] 

## Example

```python
from openapi_client.models.identity_provider_list_by_service200_response_value_inner_properties import IdentityProviderListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityProviderListByService200ResponseValueInnerProperties from a JSON string
identity_provider_list_by_service200_response_value_inner_properties_instance = IdentityProviderListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(IdentityProviderListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
identity_provider_list_by_service200_response_value_inner_properties_dict = identity_provider_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of IdentityProviderListByService200ResponseValueInnerProperties from a dict
identity_provider_list_by_service200_response_value_inner_properties_from_dict = IdentityProviderListByService200ResponseValueInnerProperties.from_dict(identity_provider_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


