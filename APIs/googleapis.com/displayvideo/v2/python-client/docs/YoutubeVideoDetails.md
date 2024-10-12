# YoutubeVideoDetails

Details of a YouTube video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The YouTube video ID which can be searched on YouTube webpage. | [optional] 
**unavailable_reason** | **str** | The reason why the video data is not available. | [optional] 

## Example

```python
from openapi_client.models.youtube_video_details import YoutubeVideoDetails

# TODO update the JSON string below
json = "{}"
# create an instance of YoutubeVideoDetails from a JSON string
youtube_video_details_instance = YoutubeVideoDetails.from_json(json)
# print the JSON string representation of the object
print(YoutubeVideoDetails.to_json())

# convert the object into a dict
youtube_video_details_dict = youtube_video_details_instance.to_dict()
# create an instance of YoutubeVideoDetails from a dict
youtube_video_details_from_dict = YoutubeVideoDetails.from_dict(youtube_video_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


