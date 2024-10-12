# PlaylistItem

A *playlistItem* resource identifies another resource, such as a video, that is included in a playlist. In addition, the playlistItem resource contains details about the included resource that pertain specifically to how that resource is used in that playlist. YouTube uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods. For example, if a user gives a positive rating to a video, you would insert that video into the liked videos playlist for that user's channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_details** | [**PlaylistItemContentDetails**](PlaylistItemContentDetails.md) |  | [optional] 
**etag** | **str** | Etag of this resource. | [optional] 
**id** | **str** | The ID that YouTube uses to uniquely identify the playlist item. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#playlistItem\&quot;. | [optional] [default to 'youtube#playlistItem']
**snippet** | [**PlaylistItemSnippet**](PlaylistItemSnippet.md) |  | [optional] 
**status** | [**PlaylistItemStatus**](PlaylistItemStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.playlist_item import PlaylistItem

# TODO update the JSON string below
json = "{}"
# create an instance of PlaylistItem from a JSON string
playlist_item_instance = PlaylistItem.from_json(json)
# print the JSON string representation of the object
print(PlaylistItem.to_json())

# convert the object into a dict
playlist_item_dict = playlist_item_instance.to_dict()
# create an instance of PlaylistItem from a dict
playlist_item_from_dict = PlaylistItem.from_dict(playlist_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


