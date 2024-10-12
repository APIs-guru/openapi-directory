# ColorStyle

A color value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rgb_color** | [**Color**](Color.md) |  | [optional] 
**theme_color** | **str** | Theme color. | [optional] 

## Example

```python
from openapi_client.models.color_style import ColorStyle

# TODO update the JSON string below
json = "{}"
# create an instance of ColorStyle from a JSON string
color_style_instance = ColorStyle.from_json(json)
# print the JSON string representation of the object
print(ColorStyle.to_json())

# convert the object into a dict
color_style_dict = color_style_instance.to_dict()
# create an instance of ColorStyle from a dict
color_style_from_dict = ColorStyle.from_dict(color_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


