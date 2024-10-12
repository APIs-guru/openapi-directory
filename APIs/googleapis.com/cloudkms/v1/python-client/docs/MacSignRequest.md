# MacSignRequest

Request message for KeyManagementService.MacSign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **bytearray** | Required. The data to sign. The MAC tag is computed over this data field based on the specific algorithm. | [optional] 
**data_crc32c** | **str** | Optional. An optional CRC32C checksum of the MacSignRequest.data. If specified, KeyManagementService will verify the integrity of the received MacSignRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacSignRequest.data) is equal to MacSignRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. | [optional] 

## Example

```python
from openapi_client.models.mac_sign_request import MacSignRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MacSignRequest from a JSON string
mac_sign_request_instance = MacSignRequest.from_json(json)
# print the JSON string representation of the object
print(MacSignRequest.to_json())

# convert the object into a dict
mac_sign_request_dict = mac_sign_request_instance.to_dict()
# create an instance of MacSignRequest from a dict
mac_sign_request_from_dict = MacSignRequest.from_dict(mac_sign_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


