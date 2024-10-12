# Jwk

Jwk is a JSON Web Key as specified in RFC 7517

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alg** | **str** | Algorithm. | [optional] 
**crv** | **str** | Used for ECDSA keys. | [optional] 
**e** | **str** | Used for RSA keys. | [optional] 
**kid** | **str** | Key ID. | [optional] 
**kty** | **str** | Key Type. | [optional] 
**n** | **str** | Used for RSA keys. | [optional] 
**use** | **str** | Permitted uses for the public keys. | [optional] 
**x** | **str** | Used for ECDSA keys. | [optional] 
**y** | **str** | Used for ECDSA keys. | [optional] 

## Example

```python
from openapi_client.models.jwk import Jwk

# TODO update the JSON string below
json = "{}"
# create an instance of Jwk from a JSON string
jwk_instance = Jwk.from_json(json)
# print the JSON string representation of the object
print(Jwk.to_json())

# convert the object into a dict
jwk_dict = jwk_instance.to_dict()
# create an instance of Jwk from a dict
jwk_from_dict = Jwk.from_dict(jwk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


