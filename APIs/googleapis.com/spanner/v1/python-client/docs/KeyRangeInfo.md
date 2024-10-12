# KeyRangeInfo

A message representing information for a key range (possibly one key).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_values** | [**List[ContextValue]**](ContextValue.md) | The list of context values for this key range. | [optional] 
**end_key_index** | **int** | The index of the end key in indexed_keys. | [optional] 
**info** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**keys_count** | **str** | The number of keys this range covers. | [optional] 
**metric** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**start_key_index** | **int** | The index of the start key in indexed_keys. | [optional] 
**time_offset** | **str** | The time offset. This is the time since the start of the time interval. | [optional] 
**unit** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**value** | **float** | The value of the metric. | [optional] 

## Example

```python
from openapi_client.models.key_range_info import KeyRangeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of KeyRangeInfo from a JSON string
key_range_info_instance = KeyRangeInfo.from_json(json)
# print the JSON string representation of the object
print(KeyRangeInfo.to_json())

# convert the object into a dict
key_range_info_dict = key_range_info_instance.to_dict()
# create an instance of KeyRangeInfo from a dict
key_range_info_from_dict = KeyRangeInfo.from_dict(key_range_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


