# AsymmetricDecryptRequest

Request message for KeyManagementService.AsymmetricDecrypt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ciphertext** | **bytearray** | Required. The data encrypted with the named CryptoKeyVersion&#39;s public key using OAEP. | [optional] 
**ciphertext_crc32c** | **str** | Optional. An optional CRC32C checksum of the AsymmetricDecryptRequest.ciphertext. If specified, KeyManagementService will verify the integrity of the received AsymmetricDecryptRequest.ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricDecryptRequest.ciphertext) is equal to AsymmetricDecryptRequest.ciphertext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. | [optional] 

## Example

```python
from openapi_client.models.asymmetric_decrypt_request import AsymmetricDecryptRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AsymmetricDecryptRequest from a JSON string
asymmetric_decrypt_request_instance = AsymmetricDecryptRequest.from_json(json)
# print the JSON string representation of the object
print(AsymmetricDecryptRequest.to_json())

# convert the object into a dict
asymmetric_decrypt_request_dict = asymmetric_decrypt_request_instance.to_dict()
# create an instance of AsymmetricDecryptRequest from a dict
asymmetric_decrypt_request_from_dict = AsymmetricDecryptRequest.from_dict(asymmetric_decrypt_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


