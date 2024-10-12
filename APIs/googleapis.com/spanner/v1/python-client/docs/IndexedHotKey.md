# IndexedHotKey

A message representing a (sparse) collection of hot keys for specific key buckets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sparse_hot_keys** | **Dict[str, int]** | A (sparse) mapping from key bucket index to the index of the specific hot row key for that key bucket. The index of the hot row key can be translated to the actual row key via the ScanData.VisualizationData.indexed_keys repeated field. | [optional] 

## Example

```python
from openapi_client.models.indexed_hot_key import IndexedHotKey

# TODO update the JSON string below
json = "{}"
# create an instance of IndexedHotKey from a JSON string
indexed_hot_key_instance = IndexedHotKey.from_json(json)
# print the JSON string representation of the object
print(IndexedHotKey.to_json())

# convert the object into a dict
indexed_hot_key_dict = indexed_hot_key_instance.to_dict()
# create an instance of IndexedHotKey from a dict
indexed_hot_key_from_dict = IndexedHotKey.from_dict(indexed_hot_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


