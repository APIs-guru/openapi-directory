# KeyValueFormat

Formatting options for key value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**position** | [**TextPosition**](TextPosition.md) |  | [optional] 
**text_format** | [**TextFormat**](TextFormat.md) |  | [optional] 

## Example

```python
from openapi_client.models.key_value_format import KeyValueFormat

# TODO update the JSON string below
json = "{}"
# create an instance of KeyValueFormat from a JSON string
key_value_format_instance = KeyValueFormat.from_json(json)
# print the JSON string representation of the object
print(KeyValueFormat.to_json())

# convert the object into a dict
key_value_format_dict = key_value_format_instance.to_dict()
# create an instance of KeyValueFormat from a dict
key_value_format_from_dict = KeyValueFormat.from_dict(key_value_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


