# MacVerifyResponse

Response message for KeyManagementService.MacVerify.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The resource name of the CryptoKeyVersion used for verification. Check this field to verify that the intended resource was used for verification. | [optional] 
**protection_level** | **str** | The ProtectionLevel of the CryptoKeyVersion used for verification. | [optional] 
**success** | **bool** | This field indicates whether or not the verification operation for MacVerifyRequest.mac over MacVerifyRequest.data was successful. | [optional] 
**verified_data_crc32c** | **bool** | Integrity verification field. A flag indicating whether MacVerifyRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that MacVerifyRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService. If you&#39;ve set MacVerifyRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries. | [optional] 
**verified_mac_crc32c** | **bool** | Integrity verification field. A flag indicating whether MacVerifyRequest.mac_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that MacVerifyRequest.mac_crc32c was left unset or that it was not delivered to KeyManagementService. If you&#39;ve set MacVerifyRequest.mac_crc32c but this field is still false, discard the response and perform a limited number of retries. | [optional] 
**verified_success_integrity** | **bool** | Integrity verification field. This value is used for the integrity verification of [MacVerifyResponse.success]. If the value of this field contradicts the value of [MacVerifyResponse.success], discard the response and perform a limited number of retries. | [optional] 

## Example

```python
from openapi_client.models.mac_verify_response import MacVerifyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MacVerifyResponse from a JSON string
mac_verify_response_instance = MacVerifyResponse.from_json(json)
# print the JSON string representation of the object
print(MacVerifyResponse.to_json())

# convert the object into a dict
mac_verify_response_dict = mac_verify_response_instance.to_dict()
# create an instance of MacVerifyResponse from a dict
mac_verify_response_from_dict = MacVerifyResponse.from_dict(mac_verify_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


