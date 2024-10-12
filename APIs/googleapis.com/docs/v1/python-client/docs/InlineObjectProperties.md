# InlineObjectProperties

Properties of an InlineObject.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedded_object** | [**EmbeddedObject**](EmbeddedObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.inline_object_properties import InlineObjectProperties

# TODO update the JSON string below
json = "{}"
# create an instance of InlineObjectProperties from a JSON string
inline_object_properties_instance = InlineObjectProperties.from_json(json)
# print the JSON string representation of the object
print(InlineObjectProperties.to_json())

# convert the object into a dict
inline_object_properties_dict = inline_object_properties_instance.to_dict()
# create an instance of InlineObjectProperties from a dict
inline_object_properties_from_dict = InlineObjectProperties.from_dict(inline_object_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


