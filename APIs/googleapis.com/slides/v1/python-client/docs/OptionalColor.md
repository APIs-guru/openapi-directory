# OptionalColor

A color that can either be fully opaque or fully transparent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**opaque_color** | [**OpaqueColor**](OpaqueColor.md) |  | [optional] 

## Example

```python
from openapi_client.models.optional_color import OptionalColor

# TODO update the JSON string below
json = "{}"
# create an instance of OptionalColor from a JSON string
optional_color_instance = OptionalColor.from_json(json)
# print the JSON string representation of the object
print(OptionalColor.to_json())

# convert the object into a dict
optional_color_dict = optional_color_instance.to_dict()
# create an instance of OptionalColor from a dict
optional_color_from_dict = OptionalColor.from_dict(optional_color_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


