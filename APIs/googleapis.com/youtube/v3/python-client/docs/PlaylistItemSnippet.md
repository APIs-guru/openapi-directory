# PlaylistItemSnippet

Basic details about a playlist, including title, description and thumbnails. Basic details of a YouTube Playlist item provided by the author. Next ID: 15

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** | The ID that YouTube uses to uniquely identify the user that added the item to the playlist. | [optional] 
**channel_title** | **str** | Channel title for the channel that the playlist item belongs to. | [optional] 
**description** | **str** | The item&#39;s description. | [optional] 
**playlist_id** | **str** | The ID that YouTube uses to uniquely identify thGe playlist that the playlist item is in. | [optional] 
**position** | **int** | The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of 0, the second item has a position of 1, and so forth. | [optional] 
**published_at** | **datetime** | The date and time that the item was added to the playlist. | [optional] 
**resource_id** | [**ResourceId**](ResourceId.md) |  | [optional] 
**thumbnails** | [**ThumbnailDetails**](ThumbnailDetails.md) |  | [optional] 
**title** | **str** | The item&#39;s title. | [optional] 
**video_owner_channel_id** | **str** | Channel id for the channel this video belongs to. | [optional] 
**video_owner_channel_title** | **str** | Channel title for the channel this video belongs to. | [optional] 

## Example

```python
from openapi_client.models.playlist_item_snippet import PlaylistItemSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of PlaylistItemSnippet from a JSON string
playlist_item_snippet_instance = PlaylistItemSnippet.from_json(json)
# print the JSON string representation of the object
print(PlaylistItemSnippet.to_json())

# convert the object into a dict
playlist_item_snippet_dict = playlist_item_snippet_instance.to_dict()
# create an instance of PlaylistItemSnippet from a dict
playlist_item_snippet_from_dict = PlaylistItemSnippet.from_dict(playlist_item_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


