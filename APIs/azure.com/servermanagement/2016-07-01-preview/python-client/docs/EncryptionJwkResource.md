# EncryptionJwkResource

The public key of the gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alg** | **str** |  | [optional] 
**e** | **str** |  | [optional] 
**kty** | **str** |  | [optional] 
**n** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.encryption_jwk_resource import EncryptionJwkResource

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionJwkResource from a JSON string
encryption_jwk_resource_instance = EncryptionJwkResource.from_json(json)
# print the JSON string representation of the object
print(EncryptionJwkResource.to_json())

# convert the object into a dict
encryption_jwk_resource_dict = encryption_jwk_resource_instance.to_dict()
# create an instance of EncryptionJwkResource from a dict
encryption_jwk_resource_from_dict = EncryptionJwkResource.from_dict(encryption_jwk_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


