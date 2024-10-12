# IndexedKeyRangeInfos

A message representing a (sparse) collection of KeyRangeInfos for specific key buckets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_range_infos** | [**Dict[str, KeyRangeInfos]**](KeyRangeInfos.md) | A (sparse) mapping from key bucket index to the KeyRangeInfos for that key bucket. | [optional] 

## Example

```python
from openapi_client.models.indexed_key_range_infos import IndexedKeyRangeInfos

# TODO update the JSON string below
json = "{}"
# create an instance of IndexedKeyRangeInfos from a JSON string
indexed_key_range_infos_instance = IndexedKeyRangeInfos.from_json(json)
# print the JSON string representation of the object
print(IndexedKeyRangeInfos.to_json())

# convert the object into a dict
indexed_key_range_infos_dict = indexed_key_range_infos_instance.to_dict()
# create an instance of IndexedKeyRangeInfos from a dict
indexed_key_range_infos_from_dict = IndexedKeyRangeInfos.from_dict(indexed_key_range_infos_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


