# IdentityProviderListSecrets200Response

Client or app secret used in IdentityProviders, Aad, OpenID or OAuth.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_secret** | **str** | Client or app secret used in IdentityProviders, Aad, OpenID or OAuth. | [optional] 

## Example

```python
from openapi_client.models.identity_provider_list_secrets200_response import IdentityProviderListSecrets200Response

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityProviderListSecrets200Response from a JSON string
identity_provider_list_secrets200_response_instance = IdentityProviderListSecrets200Response.from_json(json)
# print the JSON string representation of the object
print(IdentityProviderListSecrets200Response.to_json())

# convert the object into a dict
identity_provider_list_secrets200_response_dict = identity_provider_list_secrets200_response_instance.to_dict()
# create an instance of IdentityProviderListSecrets200Response from a dict
identity_provider_list_secrets200_response_from_dict = IdentityProviderListSecrets200Response.from_dict(identity_provider_list_secrets200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


