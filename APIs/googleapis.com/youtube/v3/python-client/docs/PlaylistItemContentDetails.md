# PlaylistItemContentDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_at** | **str** | The time, measured in seconds from the start of the video, when the video should stop playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) By default, assume that the video.endTime is the end of the video. | [optional] 
**note** | **str** | A user-generated note for this item. | [optional] 
**start_at** | **str** | The time, measured in seconds from the start of the video, when the video should start playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) The default value is 0. | [optional] 
**video_id** | **str** | The ID that YouTube uses to uniquely identify a video. To retrieve the video resource, set the id query parameter to this value in your API request. | [optional] 
**video_published_at** | **datetime** | The date and time that the video was published to YouTube. | [optional] 

## Example

```python
from openapi_client.models.playlist_item_content_details import PlaylistItemContentDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PlaylistItemContentDetails from a JSON string
playlist_item_content_details_instance = PlaylistItemContentDetails.from_json(json)
# print the JSON string representation of the object
print(PlaylistItemContentDetails.to_json())

# convert the object into a dict
playlist_item_content_details_dict = playlist_item_content_details_instance.to_dict()
# create an instance of PlaylistItemContentDetails from a dict
playlist_item_content_details_from_dict = PlaylistItemContentDetails.from_dict(playlist_item_content_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


