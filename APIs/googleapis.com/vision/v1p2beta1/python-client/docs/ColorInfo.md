# ColorInfo

Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | [**Color**](Color.md) |  | [optional] 
**pixel_fraction** | **float** | The fraction of pixels the color occupies in the image. Value in range [0, 1]. | [optional] 
**score** | **float** | Image-specific score for this color. Value in range [0, 1]. | [optional] 

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


