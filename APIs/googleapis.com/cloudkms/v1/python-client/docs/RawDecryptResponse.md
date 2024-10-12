# RawDecryptResponse

Response message for KeyManagementService.RawDecrypt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plaintext** | **bytearray** | The decrypted data. | [optional] 
**plaintext_crc32c** | **str** | Integrity verification field. A CRC32C checksum of the returned RawDecryptResponse.plaintext. An integrity check of plaintext can be performed by computing the CRC32C checksum of plaintext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: receiving this response message indicates that KeyManagementService is able to successfully decrypt the ciphertext. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. | [optional] 
**protection_level** | **str** | The ProtectionLevel of the CryptoKeyVersion used in decryption. | [optional] 
**verified_additional_authenticated_data_crc32c** | **bool** | Integrity verification field. A flag indicating whether RawDecryptRequest.additional_authenticated_data_crc32c was received by KeyManagementService and used for the integrity verification of additional_authenticated_data. A false value of this field indicates either that // RawDecryptRequest.additional_authenticated_data_crc32c was left unset or that it was not delivered to KeyManagementService. If you&#39;ve set RawDecryptRequest.additional_authenticated_data_crc32c but this field is still false, discard the response and perform a limited number of retries. | [optional] 
**verified_ciphertext_crc32c** | **bool** | Integrity verification field. A flag indicating whether RawDecryptRequest.ciphertext_crc32c was received by KeyManagementService and used for the integrity verification of the ciphertext. A false value of this field indicates either that RawDecryptRequest.ciphertext_crc32c was left unset or that it was not delivered to KeyManagementService. If you&#39;ve set RawDecryptRequest.ciphertext_crc32c but this field is still false, discard the response and perform a limited number of retries. | [optional] 
**verified_initialization_vector_crc32c** | **bool** | Integrity verification field. A flag indicating whether RawDecryptRequest.initialization_vector_crc32c was received by KeyManagementService and used for the integrity verification of initialization_vector. A false value of this field indicates either that RawDecryptRequest.initialization_vector_crc32c was left unset or that it was not delivered to KeyManagementService. If you&#39;ve set RawDecryptRequest.initialization_vector_crc32c but this field is still false, discard the response and perform a limited number of retries. | [optional] 

## Example

```python
from openapi_client.models.raw_decrypt_response import RawDecryptResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RawDecryptResponse from a JSON string
raw_decrypt_response_instance = RawDecryptResponse.from_json(json)
# print the JSON string representation of the object
print(RawDecryptResponse.to_json())

# convert the object into a dict
raw_decrypt_response_dict = raw_decrypt_response_instance.to_dict()
# create an instance of RawDecryptResponse from a dict
raw_decrypt_response_from_dict = RawDecryptResponse.from_dict(raw_decrypt_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


