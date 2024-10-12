# Color

Color preprocessing configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brightness** | **float** | Control brightness of the video. Enter a value between -1 and 1, where -1 is minimum brightness and 1 is maximum brightness. 0 is no change. The default is 0. | [optional] 
**contrast** | **float** | Control black and white contrast of the video. Enter a value between -1 and 1, where -1 is minimum contrast and 1 is maximum contrast. 0 is no change. The default is 0. | [optional] 
**saturation** | **float** | Control color saturation of the video. Enter a value between -1 and 1, where -1 is fully desaturated and 1 is maximum saturation. 0 is no change. The default is 0. | [optional] 

## Example

```python
from openapi_client.models.color import Color

# TODO update the JSON string below
json = "{}"
# create an instance of Color from a JSON string
color_instance = Color.from_json(json)
# print the JSON string representation of the object
print(Color.to_json())

# convert the object into a dict
color_dict = color_instance.to_dict()
# create an instance of Color from a dict
color_from_dict = Color.from_dict(color_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


