# VideoViewEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_time** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**playback_time** | **int** |  | [optional] 
**viewer_time** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.video_view_event import VideoViewEvent

# TODO update the JSON string below
json = "{}"
# create an instance of VideoViewEvent from a JSON string
video_view_event_instance = VideoViewEvent.from_json(json)
# print the JSON string representation of the object
print(VideoViewEvent.to_json())

# convert the object into a dict
video_view_event_dict = video_view_event_instance.to_dict()
# create an instance of VideoViewEvent from a dict
video_view_event_from_dict = VideoViewEvent.from_dict(video_view_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


