# VideoLink

Link to a video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_text** | **str** | Required. The display text for the link. | [optional] 
**youtube_uri** | **str** | The URI of a YouTube video. | [optional] 

## Example

```python
from openapi_client.models.video_link import VideoLink

# TODO update the JSON string below
json = "{}"
# create an instance of VideoLink from a JSON string
video_link_instance = VideoLink.from_json(json)
# print the JSON string representation of the object
print(VideoLink.to_json())

# convert the object into a dict
video_link_dict = video_link_instance.to_dict()
# create an instance of VideoLink from a dict
video_link_from_dict = VideoLink.from_dict(video_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


