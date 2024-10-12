# KeyValuePairObject

Individual key-value pair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kvp_key** | **str** | Name of the data | [optional] 
**kvp_type** | [**EnumKVPType**](EnumKVPType.md) |  | [optional] 
**kvp_value** | **str** | Value of the data | [optional] 

## Example

```python
from openapi_client.models.key_value_pair_object import KeyValuePairObject

# TODO update the JSON string below
json = "{}"
# create an instance of KeyValuePairObject from a JSON string
key_value_pair_object_instance = KeyValuePairObject.from_json(json)
# print the JSON string representation of the object
print(KeyValuePairObject.to_json())

# convert the object into a dict
key_value_pair_object_dict = key_value_pair_object_instance.to_dict()
# create an instance of KeyValuePairObject from a dict
key_value_pair_object_from_dict = KeyValuePairObject.from_dict(key_value_pair_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


