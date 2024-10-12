# EncryptResponse

Response message for KeyManagementService.Encrypt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ciphertext** | **bytearray** | The encrypted data. | [optional] 
**ciphertext_crc32c** | **str** | Integrity verification field. A CRC32C checksum of the returned EncryptResponse.ciphertext. An integrity check of EncryptResponse.ciphertext can be performed by computing the CRC32C checksum of EncryptResponse.ciphertext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. | [optional] 
**name** | **str** | The resource name of the CryptoKeyVersion used in encryption. Check this field to verify that the intended resource was used for encryption. | [optional] 
**protection_level** | **str** | The ProtectionLevel of the CryptoKeyVersion used in encryption. | [optional] 
**verified_additional_authenticated_data_crc32c** | **bool** | Integrity verification field. A flag indicating whether EncryptRequest.additional_authenticated_data_crc32c was received by KeyManagementService and used for the integrity verification of the AAD. A false value of this field indicates either that EncryptRequest.additional_authenticated_data_crc32c was left unset or that it was not delivered to KeyManagementService. If you&#39;ve set EncryptRequest.additional_authenticated_data_crc32c but this field is still false, discard the response and perform a limited number of retries. | [optional] 
**verified_plaintext_crc32c** | **bool** | Integrity verification field. A flag indicating whether EncryptRequest.plaintext_crc32c was received by KeyManagementService and used for the integrity verification of the plaintext. A false value of this field indicates either that EncryptRequest.plaintext_crc32c was left unset or that it was not delivered to KeyManagementService. If you&#39;ve set EncryptRequest.plaintext_crc32c but this field is still false, discard the response and perform a limited number of retries. | [optional] 

## Example

```python
from openapi_client.models.encrypt_response import EncryptResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptResponse from a JSON string
encrypt_response_instance = EncryptResponse.from_json(json)
# print the JSON string representation of the object
print(EncryptResponse.to_json())

# convert the object into a dict
encrypt_response_dict = encrypt_response_instance.to_dict()
# create an instance of EncryptResponse from a dict
encrypt_response_from_dict = EncryptResponse.from_dict(encrypt_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


