# PublicKey

The public keys for a given CryptoKeyVersion. Obtained via GetPublicKey.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | The Algorithm associated with this key. | [optional] 
**name** | **str** | The name of the CryptoKeyVersion public key. Provided here for verification. NOTE: This field is in Beta. | [optional] 
**pem** | **str** | A public key encoded in PEM format, populated only when GetPublicKey returns one key. For more information, see the [RFC 7468](https://tools.ietf.org/html/rfc7468) sections for [General Considerations](https://tools.ietf.org/html/rfc7468#section-2) and [Textual Encoding of Subject Public Key Info] (https://tools.ietf.org/html/rfc7468#section-13). | [optional] 
**pem_crc32c** | **str** | Integrity verification field: A CRC32C checksum of the returned PublicKey.pem. It is only populated when GetPublicKey returns one key. An integrity check of PublicKey.pem can be performed by computing the CRC32C checksum of PublicKey.pem and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. NOTE: This field is in Beta. | [optional] 
**protection_level** | **str** | The ProtectionLevel of the CryptoKeyVersion public key. | [optional] 

## Example

```python
from openapi_client.models.public_key import PublicKey

# TODO update the JSON string below
json = "{}"
# create an instance of PublicKey from a JSON string
public_key_instance = PublicKey.from_json(json)
# print the JSON string representation of the object
print(PublicKey.to_json())

# convert the object into a dict
public_key_dict = public_key_instance.to_dict()
# create an instance of PublicKey from a dict
public_key_from_dict = PublicKey.from_dict(public_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


