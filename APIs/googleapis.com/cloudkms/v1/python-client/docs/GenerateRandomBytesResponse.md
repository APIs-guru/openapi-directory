# GenerateRandomBytesResponse

Response message for KeyManagementService.GenerateRandomBytes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **bytearray** | The generated data. | [optional] 
**data_crc32c** | **str** | Integrity verification field. A CRC32C checksum of the returned GenerateRandomBytesResponse.data. An integrity check of GenerateRandomBytesResponse.data can be performed by computing the CRC32C checksum of GenerateRandomBytesResponse.data and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. | [optional] 

## Example

```python
from openapi_client.models.generate_random_bytes_response import GenerateRandomBytesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateRandomBytesResponse from a JSON string
generate_random_bytes_response_instance = GenerateRandomBytesResponse.from_json(json)
# print the JSON string representation of the object
print(GenerateRandomBytesResponse.to_json())

# convert the object into a dict
generate_random_bytes_response_dict = generate_random_bytes_response_instance.to_dict()
# create an instance of GenerateRandomBytesResponse from a dict
generate_random_bytes_response_from_dict = GenerateRandomBytesResponse.from_dict(generate_random_bytes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


