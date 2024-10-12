# KeySet

`KeySet` defines a collection of Cloud Spanner keys and/or key ranges. All the keys are expected to be in the same table or index. The keys need not be sorted in any particular way. If the same key is specified multiple times in the set (for example if two ranges, two keys, or a key and a range overlap), Cloud Spanner behaves as if the key were only specified once.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all** | **bool** | For convenience &#x60;all&#x60; can be set to &#x60;true&#x60; to indicate that this &#x60;KeySet&#x60; matches all keys in the table or index. Note that any keys specified in &#x60;keys&#x60; or &#x60;ranges&#x60; are only yielded once. | [optional] 
**keys** | **List[List[object]]** | A list of specific keys. Entries in &#x60;keys&#x60; should have exactly as many elements as there are columns in the primary or index key with which this &#x60;KeySet&#x60; is used. Individual key values are encoded as described here. | [optional] 
**ranges** | [**List[KeyRange]**](KeyRange.md) | A list of key ranges. See KeyRange for more information about key range specifications. | [optional] 

## Example

```python
from openapi_client.models.key_set import KeySet

# TODO update the JSON string below
json = "{}"
# create an instance of KeySet from a JSON string
key_set_instance = KeySet.from_json(json)
# print the JSON string representation of the object
print(KeySet.to_json())

# convert the object into a dict
key_set_dict = key_set_instance.to_dict()
# create an instance of KeySet from a dict
key_set_from_dict = KeySet.from_dict(key_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


