# VideoRecordingDetails

Recording information associated with the video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | [**GeoPoint**](GeoPoint.md) |  | [optional] 
**location_description** | **str** | The text description of the location where the video was recorded. | [optional] 
**recording_date** | **datetime** | The date and time when the video was recorded. | [optional] 

## Example

```python
from openapi_client.models.video_recording_details import VideoRecordingDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VideoRecordingDetails from a JSON string
video_recording_details_instance = VideoRecordingDetails.from_json(json)
# print the JSON string representation of the object
print(VideoRecordingDetails.to_json())

# convert the object into a dict
video_recording_details_dict = video_recording_details_instance.to_dict()
# create an instance of VideoRecordingDetails from a dict
video_recording_details_from_dict = VideoRecordingDetails.from_dict(video_recording_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


