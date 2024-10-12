# KeyValue

A product label represented as a key-value pair.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. | [optional] 
**value** | **str** | The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. | [optional] 

## Example

```python
from openapi_client.models.key_value import KeyValue

# TODO update the JSON string below
json = "{}"
# create an instance of KeyValue from a JSON string
key_value_instance = KeyValue.from_json(json)
# print the JSON string representation of the object
print(KeyValue.to_json())

# convert the object into a dict
key_value_dict = key_value_instance.to_dict()
# create an instance of KeyValue from a dict
key_value_from_dict = KeyValue.from_dict(key_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


