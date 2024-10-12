# ChannelContentDetailsRelatedPlaylists


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**favorites** | **str** | The ID of the playlist that contains the channel\&quot;s favorite videos. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list. | [optional] 
**likes** | **str** | The ID of the playlist that contains the channel\&quot;s liked videos. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list. | [optional] 
**uploads** | **str** | The ID of the playlist that contains the channel\&quot;s uploaded videos. Use the videos.insert method to upload new videos and the videos.delete method to delete previously uploaded videos. | [optional] 
**watch_history** | **str** | The ID of the playlist that contains the channel\&quot;s watch history. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list. | [optional] 
**watch_later** | **str** | The ID of the playlist that contains the channel\&quot;s watch later playlist. Use the playlistItems.insert and playlistItems.delete to add or remove items from that list. | [optional] 

## Example

```python
from openapi_client.models.channel_content_details_related_playlists import ChannelContentDetailsRelatedPlaylists

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelContentDetailsRelatedPlaylists from a JSON string
channel_content_details_related_playlists_instance = ChannelContentDetailsRelatedPlaylists.from_json(json)
# print the JSON string representation of the object
print(ChannelContentDetailsRelatedPlaylists.to_json())

# convert the object into a dict
channel_content_details_related_playlists_dict = channel_content_details_related_playlists_instance.to_dict()
# create an instance of ChannelContentDetailsRelatedPlaylists from a dict
channel_content_details_related_playlists_from_dict = ChannelContentDetailsRelatedPlaylists.from_dict(channel_content_details_related_playlists_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


