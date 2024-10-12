# GenerateRandomBytesRequest

Request message for KeyManagementService.GenerateRandomBytes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**length_bytes** | **int** | The length in bytes of the amount of randomness to retrieve. Minimum 8 bytes, maximum 1024 bytes. | [optional] 
**protection_level** | **str** | The ProtectionLevel to use when generating the random data. Currently, only HSM protection level is supported. | [optional] 

## Example

```python
from openapi_client.models.generate_random_bytes_request import GenerateRandomBytesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateRandomBytesRequest from a JSON string
generate_random_bytes_request_instance = GenerateRandomBytesRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateRandomBytesRequest.to_json())

# convert the object into a dict
generate_random_bytes_request_dict = generate_random_bytes_request_instance.to_dict()
# create an instance of GenerateRandomBytesRequest from a dict
generate_random_bytes_request_from_dict = GenerateRandomBytesRequest.from_dict(generate_random_bytes_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


