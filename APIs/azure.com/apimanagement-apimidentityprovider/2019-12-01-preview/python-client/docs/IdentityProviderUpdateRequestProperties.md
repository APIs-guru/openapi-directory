# IdentityProviderUpdateRequestProperties

Parameters supplied to the Update Identity Provider operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft. | [optional] 
**client_secret** | **str** | Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft. | [optional] 

## Example

```python
from openapi_client.models.identity_provider_update_request_properties import IdentityProviderUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityProviderUpdateRequestProperties from a JSON string
identity_provider_update_request_properties_instance = IdentityProviderUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(IdentityProviderUpdateRequestProperties.to_json())

# convert the object into a dict
identity_provider_update_request_properties_dict = identity_provider_update_request_properties_instance.to_dict()
# create an instance of IdentityProviderUpdateRequestProperties from a dict
identity_provider_update_request_properties_from_dict = IdentityProviderUpdateRequestProperties.from_dict(identity_provider_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


