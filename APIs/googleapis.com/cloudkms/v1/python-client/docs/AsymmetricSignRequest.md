# AsymmetricSignRequest

Request message for KeyManagementService.AsymmetricSign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **bytearray** | Optional. The data to sign. It can&#39;t be supplied if AsymmetricSignRequest.digest is supplied. | [optional] 
**data_crc32c** | **str** | Optional. An optional CRC32C checksum of the AsymmetricSignRequest.data. If specified, KeyManagementService will verify the integrity of the received AsymmetricSignRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricSignRequest.data) is equal to AsymmetricSignRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. | [optional] 
**digest** | [**Digest**](Digest.md) |  | [optional] 
**digest_crc32c** | **str** | Optional. An optional CRC32C checksum of the AsymmetricSignRequest.digest. If specified, KeyManagementService will verify the integrity of the received AsymmetricSignRequest.digest using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricSignRequest.digest) is equal to AsymmetricSignRequest.digest_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. | [optional] 

## Example

```python
from openapi_client.models.asymmetric_sign_request import AsymmetricSignRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AsymmetricSignRequest from a JSON string
asymmetric_sign_request_instance = AsymmetricSignRequest.from_json(json)
# print the JSON string representation of the object
print(AsymmetricSignRequest.to_json())

# convert the object into a dict
asymmetric_sign_request_dict = asymmetric_sign_request_instance.to_dict()
# create an instance of AsymmetricSignRequest from a dict
asymmetric_sign_request_from_dict = AsymmetricSignRequest.from_dict(asymmetric_sign_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


