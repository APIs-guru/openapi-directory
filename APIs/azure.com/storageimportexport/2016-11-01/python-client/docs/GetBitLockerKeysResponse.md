# GetBitLockerKeysResponse

GetBitLockerKeys response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[DriveBitLockerKey]**](DriveBitLockerKey.md) | drive status | [optional] 

## Example

```python
from openapi_client.models.get_bit_locker_keys_response import GetBitLockerKeysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetBitLockerKeysResponse from a JSON string
get_bit_locker_keys_response_instance = GetBitLockerKeysResponse.from_json(json)
# print the JSON string representation of the object
print(GetBitLockerKeysResponse.to_json())

# convert the object into a dict
get_bit_locker_keys_response_dict = get_bit_locker_keys_response_instance.to_dict()
# create an instance of GetBitLockerKeysResponse from a dict
get_bit_locker_keys_response_from_dict = GetBitLockerKeysResponse.from_dict(get_bit_locker_keys_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


