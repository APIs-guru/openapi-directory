# GenericOauth2ModuleConfigJwtVerifier

Algo. settings to verify JWT token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret** | **str** | The secret value for the HMAC function | 
**size** | **int** | Size for SHA function. can be 256, 384 or 512 | 
**type** | **str** | String with value JWKSAlgoSettings | 
**private_key** | **str** | The private key for the RSA function | [optional] 
**public_key** | **str** | The public key for the RSA function | 
**headers** | **Dict[str, str]** | The headers for the http call | [optional] 
**kty** | **str** | The type of key: RSA or EC | [optional] 
**timeout** | **int** | The timeout of the http call | [optional] 
**ttl** | **int** | The ttl of the keyset | [optional] 
**url** | **str** | The url for the http call | [optional] 

## Example

```python
from openapi_client.models.generic_oauth2_module_config_jwt_verifier import GenericOauth2ModuleConfigJwtVerifier

# TODO update the JSON string below
json = "{}"
# create an instance of GenericOauth2ModuleConfigJwtVerifier from a JSON string
generic_oauth2_module_config_jwt_verifier_instance = GenericOauth2ModuleConfigJwtVerifier.from_json(json)
# print the JSON string representation of the object
print(GenericOauth2ModuleConfigJwtVerifier.to_json())

# convert the object into a dict
generic_oauth2_module_config_jwt_verifier_dict = generic_oauth2_module_config_jwt_verifier_instance.to_dict()
# create an instance of GenericOauth2ModuleConfigJwtVerifier from a dict
generic_oauth2_module_config_jwt_verifier_from_dict = GenericOauth2ModuleConfigJwtVerifier.from_dict(generic_oauth2_module_config_jwt_verifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


