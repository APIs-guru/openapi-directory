# IdentityAwareProxy

Identity-Aware Proxy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the serving infrastructure will authenticate and authorize all incoming requests.If true, the oauth2_client_id and oauth2_client_secret fields must be non-empty. | [optional] 
**oauth2_client_id** | **str** | OAuth2 client ID to use for the authentication flow. | [optional] 
**oauth2_client_secret** | **str** | OAuth2 client secret to use for the authentication flow.For security reasons, this value cannot be retrieved via the API. Instead, the SHA-256 hash of the value is returned in the oauth2_client_secret_sha256 field.@InputOnly | [optional] 
**oauth2_client_secret_sha256** | **str** | Output only. Hex-encoded SHA-256 hash of the client secret.@OutputOnly | [optional] [readonly] 

## Example

```python
from openapi_client.models.identity_aware_proxy import IdentityAwareProxy

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityAwareProxy from a JSON string
identity_aware_proxy_instance = IdentityAwareProxy.from_json(json)
# print the JSON string representation of the object
print(IdentityAwareProxy.to_json())

# convert the object into a dict
identity_aware_proxy_dict = identity_aware_proxy_instance.to_dict()
# create an instance of IdentityAwareProxy from a dict
identity_aware_proxy_from_dict = IdentityAwareProxy.from_dict(identity_aware_proxy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


