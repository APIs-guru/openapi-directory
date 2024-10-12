# ColorInfo

An object providing additional metadata describing color attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accent_color** | **str** | Possible accent color. | [optional] 
**dominant_color_background** | **str** | Possible dominant background color. | [optional] 
**dominant_color_foreground** | **str** | Possible dominant foreground color. | [optional] 
**dominant_colors** | **List[str]** | An array of possible dominant colors. | [optional] 
**is_bw_img** | **bool** | A value indicating if the image is black and white. | [optional] 

## Example

```python
from openapi_client.models.color_info import ColorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ColorInfo from a JSON string
color_info_instance = ColorInfo.from_json(json)
# print the JSON string representation of the object
print(ColorInfo.to_json())

# convert the object into a dict
color_info_dict = color_info_instance.to_dict()
# create an instance of ColorInfo from a dict
color_info_from_dict = ColorInfo.from_dict(color_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


