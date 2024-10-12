# AuthorizationServerListSecrets200Response

Client or app secret used in IdentityProviders, Aad, OpenID or OAuth.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_secret** | **str** | Client or app secret used in IdentityProviders, Aad, OpenID or OAuth. | [optional] 

## Example

```python
from openapi_client.models.authorization_server_list_secrets200_response import AuthorizationServerListSecrets200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationServerListSecrets200Response from a JSON string
authorization_server_list_secrets200_response_instance = AuthorizationServerListSecrets200Response.from_json(json)
# print the JSON string representation of the object
print(AuthorizationServerListSecrets200Response.to_json())

# convert the object into a dict
authorization_server_list_secrets200_response_dict = authorization_server_list_secrets200_response_instance.to_dict()
# create an instance of AuthorizationServerListSecrets200Response from a dict
authorization_server_list_secrets200_response_from_dict = AuthorizationServerListSecrets200Response.from_dict(authorization_server_list_secrets200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


