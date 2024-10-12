# Aes128Encryption

Configuration for AES-128 encryption.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_uri** | **str** | Required. URI of the key delivery service. This URI is inserted into the M3U8 header. | [optional] 

## Example

```python
from openapi_client.models.aes128_encryption import Aes128Encryption

# TODO update the JSON string below
json = "{}"
# create an instance of Aes128Encryption from a JSON string
aes128_encryption_instance = Aes128Encryption.from_json(json)
# print the JSON string representation of the object
print(Aes128Encryption.to_json())

# convert the object into a dict
aes128_encryption_dict = aes128_encryption_instance.to_dict()
# create an instance of Aes128Encryption from a dict
aes128_encryption_from_dict = Aes128Encryption.from_dict(aes128_encryption_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


