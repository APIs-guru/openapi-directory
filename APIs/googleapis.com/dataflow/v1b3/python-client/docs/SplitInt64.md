# SplitInt64

A representation of an int64, n, that is immune to precision loss when encoded in JSON.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high_bits** | **int** | The high order bits, including the sign: n &gt;&gt; 32. | [optional] 
**low_bits** | **int** | The low order bits: n &amp; 0xffffffff. | [optional] 

## Example

```python
from openapi_client.models.split_int64 import SplitInt64

# TODO update the JSON string below
json = "{}"
# create an instance of SplitInt64 from a JSON string
split_int64_instance = SplitInt64.from_json(json)
# print the JSON string representation of the object
print(SplitInt64.to_json())

# convert the object into a dict
split_int64_dict = split_int64_instance.to_dict()
# create an instance of SplitInt64 from a dict
split_int64_from_dict = SplitInt64.from_dict(split_int64_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


