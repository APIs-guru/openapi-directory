# OpenIdConnectProviderListSecrets200Response

Client or app secret used in IdentityProviders, Aad, OpenID or OAuth.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_secret** | **str** | Client or app secret used in IdentityProviders, Aad, OpenID or OAuth. | [optional] 

## Example

```python
from openapi_client.models.open_id_connect_provider_list_secrets200_response import OpenIdConnectProviderListSecrets200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OpenIdConnectProviderListSecrets200Response from a JSON string
open_id_connect_provider_list_secrets200_response_instance = OpenIdConnectProviderListSecrets200Response.from_json(json)
# print the JSON string representation of the object
print(OpenIdConnectProviderListSecrets200Response.to_json())

# convert the object into a dict
open_id_connect_provider_list_secrets200_response_dict = open_id_connect_provider_list_secrets200_response_instance.to_dict()
# create an instance of OpenIdConnectProviderListSecrets200Response from a dict
open_id_connect_provider_list_secrets200_response_from_dict = OpenIdConnectProviderListSecrets200Response.from_dict(open_id_connect_provider_list_secrets200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


