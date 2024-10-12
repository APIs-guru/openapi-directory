# MacVerifyRequest

Request message for KeyManagementService.MacVerify.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **bytearray** | Required. The data used previously as a MacSignRequest.data to generate the MAC tag. | [optional] 
**data_crc32c** | **str** | Optional. An optional CRC32C checksum of the MacVerifyRequest.data. If specified, KeyManagementService will verify the integrity of the received MacVerifyRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacVerifyRequest.data) is equal to MacVerifyRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. | [optional] 
**mac** | **bytearray** | Required. The signature to verify. | [optional] 
**mac_crc32c** | **str** | Optional. An optional CRC32C checksum of the MacVerifyRequest.mac. If specified, KeyManagementService will verify the integrity of the received MacVerifyRequest.mac using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacVerifyRequest.tag) is equal to MacVerifyRequest.mac_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. | [optional] 

## Example

```python
from openapi_client.models.mac_verify_request import MacVerifyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MacVerifyRequest from a JSON string
mac_verify_request_instance = MacVerifyRequest.from_json(json)
# print the JSON string representation of the object
print(MacVerifyRequest.to_json())

# convert the object into a dict
mac_verify_request_dict = mac_verify_request_instance.to_dict()
# create an instance of MacVerifyRequest from a dict
mac_verify_request_from_dict = MacVerifyRequest.from_dict(mac_verify_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


