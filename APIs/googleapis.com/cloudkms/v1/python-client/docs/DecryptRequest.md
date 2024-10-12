# DecryptRequest

Request message for KeyManagementService.Decrypt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_authenticated_data** | **bytearray** | Optional. Optional data that must match the data originally supplied in EncryptRequest.additional_authenticated_data. | [optional] 
**additional_authenticated_data_crc32c** | **str** | Optional. An optional CRC32C checksum of the DecryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received DecryptRequest.additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(DecryptRequest.additional_authenticated_data) is equal to DecryptRequest.additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. | [optional] 
**ciphertext** | **bytearray** | Required. The encrypted data originally returned in EncryptResponse.ciphertext. | [optional] 
**ciphertext_crc32c** | **str** | Optional. An optional CRC32C checksum of the DecryptRequest.ciphertext. If specified, KeyManagementService will verify the integrity of the received DecryptRequest.ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(DecryptRequest.ciphertext) is equal to DecryptRequest.ciphertext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. | [optional] 

## Example

```python
from openapi_client.models.decrypt_request import DecryptRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DecryptRequest from a JSON string
decrypt_request_instance = DecryptRequest.from_json(json)
# print the JSON string representation of the object
print(DecryptRequest.to_json())

# convert the object into a dict
decrypt_request_dict = decrypt_request_instance.to_dict()
# create an instance of DecryptRequest from a dict
decrypt_request_from_dict = DecryptRequest.from_dict(decrypt_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


