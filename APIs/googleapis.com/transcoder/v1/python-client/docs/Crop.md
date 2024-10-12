# Crop

Video cropping configuration for the input video. The cropped input video is scaled to match the output resolution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bottom_pixels** | **int** | The number of pixels to crop from the bottom. The default is 0. | [optional] 
**left_pixels** | **int** | The number of pixels to crop from the left. The default is 0. | [optional] 
**right_pixels** | **int** | The number of pixels to crop from the right. The default is 0. | [optional] 
**top_pixels** | **int** | The number of pixels to crop from the top. The default is 0. | [optional] 

## Example

```python
from openapi_client.models.crop import Crop

# TODO update the JSON string below
json = "{}"
# create an instance of Crop from a JSON string
crop_instance = Crop.from_json(json)
# print the JSON string representation of the object
print(Crop.to_json())

# convert the object into a dict
crop_dict = crop_instance.to_dict()
# create an instance of Crop from a dict
crop_from_dict = Crop.from_dict(crop_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


