# DecryptResponse

Response message for KeyManagementService.Decrypt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plaintext** | **bytearray** | The decrypted data originally supplied in EncryptRequest.plaintext. | [optional] 
**plaintext_crc32c** | **str** | Integrity verification field. A CRC32C checksum of the returned DecryptResponse.plaintext. An integrity check of DecryptResponse.plaintext can be performed by computing the CRC32C checksum of DecryptResponse.plaintext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: receiving this response message indicates that KeyManagementService is able to successfully decrypt the ciphertext. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. | [optional] 
**protection_level** | **str** | The ProtectionLevel of the CryptoKeyVersion used in decryption. | [optional] 
**used_primary** | **bool** | Whether the Decryption was performed using the primary key version. | [optional] 

## Example

```python
from openapi_client.models.decrypt_response import DecryptResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DecryptResponse from a JSON string
decrypt_response_instance = DecryptResponse.from_json(json)
# print the JSON string representation of the object
print(DecryptResponse.to_json())

# convert the object into a dict
decrypt_response_dict = decrypt_response_instance.to_dict()
# create an instance of DecryptResponse from a dict
decrypt_response_from_dict = DecryptResponse.from_dict(decrypt_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


