# GetOpenIDConfigResponse

GetOpenIDConfigResponse is an OIDC discovery document for the cluster. See the OpenID Connect Discovery 1.0 specification for details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_header** | [**HttpCacheControlResponseHeader**](HttpCacheControlResponseHeader.md) |  | [optional] 
**claims_supported** | **List[str]** | Supported claims. | [optional] 
**grant_types** | **List[str]** | Supported grant types. | [optional] 
**id_token_signing_alg_values_supported** | **List[str]** | supported ID Token signing Algorithms. | [optional] 
**issuer** | **str** | OIDC Issuer. | [optional] 
**jwks_uri** | **str** | JSON Web Key uri. | [optional] 
**response_types_supported** | **List[str]** | Supported response types. | [optional] 
**subject_types_supported** | **List[str]** | Supported subject types. | [optional] 

## Example

```python
from openapi_client.models.get_open_id_config_response import GetOpenIDConfigResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetOpenIDConfigResponse from a JSON string
get_open_id_config_response_instance = GetOpenIDConfigResponse.from_json(json)
# print the JSON string representation of the object
print(GetOpenIDConfigResponse.to_json())

# convert the object into a dict
get_open_id_config_response_dict = get_open_id_config_response_instance.to_dict()
# create an instance of GetOpenIDConfigResponse from a dict
get_open_id_config_response_from_dict = GetOpenIDConfigResponse.from_dict(get_open_id_config_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


