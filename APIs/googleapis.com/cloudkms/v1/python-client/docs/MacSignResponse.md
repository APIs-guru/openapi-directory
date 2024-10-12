# MacSignResponse

Response message for KeyManagementService.MacSign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mac** | **bytearray** | The created signature. | [optional] 
**mac_crc32c** | **str** | Integrity verification field. A CRC32C checksum of the returned MacSignResponse.mac. An integrity check of MacSignResponse.mac can be performed by computing the CRC32C checksum of MacSignResponse.mac and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. | [optional] 
**name** | **str** | The resource name of the CryptoKeyVersion used for signing. Check this field to verify that the intended resource was used for signing. | [optional] 
**protection_level** | **str** | The ProtectionLevel of the CryptoKeyVersion used for signing. | [optional] 
**verified_data_crc32c** | **bool** | Integrity verification field. A flag indicating whether MacSignRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that MacSignRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService. If you&#39;ve set MacSignRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries. | [optional] 

## Example

```python
from openapi_client.models.mac_sign_response import MacSignResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MacSignResponse from a JSON string
mac_sign_response_instance = MacSignResponse.from_json(json)
# print the JSON string representation of the object
print(MacSignResponse.to_json())

# convert the object into a dict
mac_sign_response_dict = mac_sign_response_instance.to_dict()
# create an instance of MacSignResponse from a dict
mac_sign_response_from_dict = MacSignResponse.from_dict(mac_sign_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


