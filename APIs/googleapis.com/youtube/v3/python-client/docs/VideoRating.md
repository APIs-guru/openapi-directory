# VideoRating

Basic details about rating of a video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rating** | **str** | Rating of a video. | [optional] 
**video_id** | **str** | The ID that YouTube uses to uniquely identify the video. | [optional] 

## Example

```python
from openapi_client.models.video_rating import VideoRating

# TODO update the JSON string below
json = "{}"
# create an instance of VideoRating from a JSON string
video_rating_instance = VideoRating.from_json(json)
# print the JSON string representation of the object
print(VideoRating.to_json())

# convert the object into a dict
video_rating_dict = video_rating_instance.to_dict()
# create an instance of VideoRating from a dict
video_rating_from_dict = VideoRating.from_dict(video_rating_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


