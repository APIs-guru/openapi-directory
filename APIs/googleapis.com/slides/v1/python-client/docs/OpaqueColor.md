# OpaqueColor

A themeable solid color value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rgb_color** | [**RgbColor**](RgbColor.md) |  | [optional] 
**theme_color** | **str** | An opaque theme color. | [optional] 

## Example

```python
from openapi_client.models.opaque_color import OpaqueColor

# TODO update the JSON string below
json = "{}"
# create an instance of OpaqueColor from a JSON string
opaque_color_instance = OpaqueColor.from_json(json)
# print the JSON string representation of the object
print(OpaqueColor.to_json())

# convert the object into a dict
opaque_color_dict = opaque_color_instance.to_dict()
# create an instance of OpaqueColor from a dict
opaque_color_from_dict = OpaqueColor.from_dict(opaque_color_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


