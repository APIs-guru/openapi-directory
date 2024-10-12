# YouTubeVideo

YouTube video item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_link** | **str** | URL that can be used to view the YouTube video. Read-only. | [optional] 
**id** | **str** | YouTube API resource ID. | [optional] 
**thumbnail_url** | **str** | URL of a thumbnail image of the YouTube video. Read-only. | [optional] 
**title** | **str** | Title of the YouTube video. Read-only. | [optional] 

## Example

```python
from openapi_client.models.you_tube_video import YouTubeVideo

# TODO update the JSON string below
json = "{}"
# create an instance of YouTubeVideo from a JSON string
you_tube_video_instance = YouTubeVideo.from_json(json)
# print the JSON string representation of the object
print(YouTubeVideo.to_json())

# convert the object into a dict
you_tube_video_dict = you_tube_video_instance.to_dict()
# create an instance of YouTubeVideo from a dict
you_tube_video_from_dict = YouTubeVideo.from_dict(you_tube_video_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


