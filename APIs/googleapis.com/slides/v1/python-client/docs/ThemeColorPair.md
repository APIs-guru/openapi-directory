# ThemeColorPair

A pair mapping a theme color type to the concrete color it represents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | [**RgbColor**](RgbColor.md) |  | [optional] 
**type** | **str** | The type of the theme color. | [optional] 

## Example

```python
from openapi_client.models.theme_color_pair import ThemeColorPair

# TODO update the JSON string below
json = "{}"
# create an instance of ThemeColorPair from a JSON string
theme_color_pair_instance = ThemeColorPair.from_json(json)
# print the JSON string representation of the object
print(ThemeColorPair.to_json())

# convert the object into a dict
theme_color_pair_dict = theme_color_pair_instance.to_dict()
# create an instance of ThemeColorPair from a dict
theme_color_pair_from_dict = ThemeColorPair.from_dict(theme_color_pair_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


