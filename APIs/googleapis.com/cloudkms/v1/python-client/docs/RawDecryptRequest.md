# RawDecryptRequest

Request message for KeyManagementService.RawDecrypt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_authenticated_data** | **bytearray** | Optional. Optional data that must match the data originally supplied in RawEncryptRequest.additional_authenticated_data. | [optional] 
**additional_authenticated_data_crc32c** | **str** | Optional. An optional CRC32C checksum of the RawDecryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(additional_authenticated_data) is equal to additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. | [optional] 
**ciphertext** | **bytearray** | Required. The encrypted data originally returned in RawEncryptResponse.ciphertext. | [optional] 
**ciphertext_crc32c** | **str** | Optional. An optional CRC32C checksum of the RawDecryptRequest.ciphertext. If specified, KeyManagementService will verify the integrity of the received ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(ciphertext) is equal to ciphertext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. | [optional] 
**initialization_vector** | **bytearray** | Required. The initialization vector (IV) used during encryption, which must match the data originally provided in RawEncryptResponse.initialization_vector. | [optional] 
**initialization_vector_crc32c** | **str** | Optional. An optional CRC32C checksum of the RawDecryptRequest.initialization_vector. If specified, KeyManagementService will verify the integrity of the received initialization_vector using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(initialization_vector) is equal to initialization_vector_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. | [optional] 
**tag_length** | **int** | The length of the authentication tag that is appended to the end of the ciphertext. If unspecified (0), the default value for the key&#39;s algorithm will be used (for AES-GCM, the default value is 16). | [optional] 

## Example

```python
from openapi_client.models.raw_decrypt_request import RawDecryptRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RawDecryptRequest from a JSON string
raw_decrypt_request_instance = RawDecryptRequest.from_json(json)
# print the JSON string representation of the object
print(RawDecryptRequest.to_json())

# convert the object into a dict
raw_decrypt_request_dict = raw_decrypt_request_instance.to_dict()
# create an instance of RawDecryptRequest from a dict
raw_decrypt_request_from_dict = RawDecryptRequest.from_dict(raw_decrypt_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


