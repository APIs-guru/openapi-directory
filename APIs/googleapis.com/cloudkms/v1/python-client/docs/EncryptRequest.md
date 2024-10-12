# EncryptRequest

Request message for KeyManagementService.Encrypt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_authenticated_data** | **bytearray** | Optional. Optional data that, if specified, must also be provided during decryption through DecryptRequest.additional_authenticated_data. The maximum size depends on the key version&#39;s protection_level. For SOFTWARE, EXTERNAL, and EXTERNAL_VPC keys the AAD must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB. | [optional] 
**additional_authenticated_data_crc32c** | **str** | Optional. An optional CRC32C checksum of the EncryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received EncryptRequest.additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(EncryptRequest.additional_authenticated_data) is equal to EncryptRequest.additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. | [optional] 
**plaintext** | **bytearray** | Required. The data to encrypt. Must be no larger than 64KiB. The maximum size depends on the key version&#39;s protection_level. For SOFTWARE, EXTERNAL, and EXTERNAL_VPC keys, the plaintext must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB. | [optional] 
**plaintext_crc32c** | **str** | Optional. An optional CRC32C checksum of the EncryptRequest.plaintext. If specified, KeyManagementService will verify the integrity of the received EncryptRequest.plaintext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(EncryptRequest.plaintext) is equal to EncryptRequest.plaintext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. | [optional] 

## Example

```python
from openapi_client.models.encrypt_request import EncryptRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptRequest from a JSON string
encrypt_request_instance = EncryptRequest.from_json(json)
# print the JSON string representation of the object
print(EncryptRequest.to_json())

# convert the object into a dict
encrypt_request_dict = encrypt_request_instance.to_dict()
# create an instance of EncryptRequest from a dict
encrypt_request_from_dict = EncryptRequest.from_dict(encrypt_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


