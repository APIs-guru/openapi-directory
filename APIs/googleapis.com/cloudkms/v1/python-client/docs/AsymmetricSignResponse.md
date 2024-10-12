# AsymmetricSignResponse

Response message for KeyManagementService.AsymmetricSign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The resource name of the CryptoKeyVersion used for signing. Check this field to verify that the intended resource was used for signing. | [optional] 
**protection_level** | **str** | The ProtectionLevel of the CryptoKeyVersion used for signing. | [optional] 
**signature** | **bytearray** | The created signature. | [optional] 
**signature_crc32c** | **str** | Integrity verification field. A CRC32C checksum of the returned AsymmetricSignResponse.signature. An integrity check of AsymmetricSignResponse.signature can be performed by computing the CRC32C checksum of AsymmetricSignResponse.signature and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. | [optional] 
**verified_data_crc32c** | **bool** | Integrity verification field. A flag indicating whether AsymmetricSignRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that AsymmetricSignRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService. If you&#39;ve set AsymmetricSignRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries. | [optional] 
**verified_digest_crc32c** | **bool** | Integrity verification field. A flag indicating whether AsymmetricSignRequest.digest_crc32c was received by KeyManagementService and used for the integrity verification of the digest. A false value of this field indicates either that AsymmetricSignRequest.digest_crc32c was left unset or that it was not delivered to KeyManagementService. If you&#39;ve set AsymmetricSignRequest.digest_crc32c but this field is still false, discard the response and perform a limited number of retries. | [optional] 

## Example

```python
from openapi_client.models.asymmetric_sign_response import AsymmetricSignResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AsymmetricSignResponse from a JSON string
asymmetric_sign_response_instance = AsymmetricSignResponse.from_json(json)
# print the JSON string representation of the object
print(AsymmetricSignResponse.to_json())

# convert the object into a dict
asymmetric_sign_response_dict = asymmetric_sign_response_instance.to_dict()
# create an instance of AsymmetricSignResponse from a dict
asymmetric_sign_response_from_dict = AsymmetricSignResponse.from_dict(asymmetric_sign_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


