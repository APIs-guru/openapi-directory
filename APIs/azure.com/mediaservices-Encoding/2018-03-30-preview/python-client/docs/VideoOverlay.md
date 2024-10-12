# VideoOverlay

Describes the properties of a video overlay.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crop_rectangle** | [**Rectangle**](Rectangle.md) |  | [optional] 
**opacity** | **float** | The opacity of the overlay. This is a value in the range [0 - 1.0]. Default is 1.0 which mean the overlay is opaque. | [optional] 
**position** | [**Rectangle**](Rectangle.md) |  | [optional] 

## Example

```python
from openapi_client.models.video_overlay import VideoOverlay

# TODO update the JSON string below
json = "{}"
# create an instance of VideoOverlay from a JSON string
video_overlay_instance = VideoOverlay.from_json(json)
# print the JSON string representation of the object
print(VideoOverlay.to_json())

# convert the object into a dict
video_overlay_dict = video_overlay_instance.to_dict()
# create an instance of VideoOverlay from a dict
video_overlay_from_dict = VideoOverlay.from_dict(video_overlay_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


