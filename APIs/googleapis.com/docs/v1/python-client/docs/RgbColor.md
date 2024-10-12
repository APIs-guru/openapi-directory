# RgbColor

An RGB color.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blue** | **float** | The blue component of the color, from 0.0 to 1.0. | [optional] 
**green** | **float** | The green component of the color, from 0.0 to 1.0. | [optional] 
**red** | **float** | The red component of the color, from 0.0 to 1.0. | [optional] 

## Example

```python
from openapi_client.models.rgb_color import RgbColor

# TODO update the JSON string below
json = "{}"
# create an instance of RgbColor from a JSON string
rgb_color_instance = RgbColor.from_json(json)
# print the JSON string representation of the object
print(RgbColor.to_json())

# convert the object into a dict
rgb_color_dict = rgb_color_instance.to_dict()
# create an instance of RgbColor from a dict
rgb_color_from_dict = RgbColor.from_dict(rgb_color_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


