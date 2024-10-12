# RsaKeyType

Describes an RSA key that may be used in a Certificate issued from a CaPool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_modulus_size** | **str** | Optional. The maximum allowed RSA modulus size (inclusive), in bits. If this is not set, or if set to zero, the service will not enforce an explicit upper bound on RSA modulus sizes. | [optional] 
**min_modulus_size** | **str** | Optional. The minimum allowed RSA modulus size (inclusive), in bits. If this is not set, or if set to zero, the service-level min RSA modulus size will continue to apply. | [optional] 

## Example

```python
from openapi_client.models.rsa_key_type import RsaKeyType

# TODO update the JSON string below
json = "{}"
# create an instance of RsaKeyType from a JSON string
rsa_key_type_instance = RsaKeyType.from_json(json)
# print the JSON string representation of the object
print(RsaKeyType.to_json())

# convert the object into a dict
rsa_key_type_dict = rsa_key_type_instance.to_dict()
# create an instance of RsaKeyType from a dict
rsa_key_type_from_dict = RsaKeyType.from_dict(rsa_key_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


