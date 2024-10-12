# PlaylistImageSnippet

A *playlistImage* resource identifies another resource, such as a image, that is associated with a playlist. In addition, the playlistImage resource contains details about the included resource that pertain specifically to how that resource is used in that playlist. YouTube uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistImages.list method to retrieve image data for any of those playlists. You can also add or remove images from those lists by calling the playlistImages.insert and playlistImages.delete methods.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | The image height. | [optional] 
**playlist_id** | **str** | The Playlist ID of the playlist this image is associated with. | [optional] 
**type** | **str** | The image type. | [optional] 
**width** | **int** | The image width. | [optional] 

## Example

```python
from openapi_client.models.playlist_image_snippet import PlaylistImageSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of PlaylistImageSnippet from a JSON string
playlist_image_snippet_instance = PlaylistImageSnippet.from_json(json)
# print the JSON string representation of the object
print(PlaylistImageSnippet.to_json())

# convert the object into a dict
playlist_image_snippet_dict = playlist_image_snippet_instance.to_dict()
# create an instance of PlaylistImageSnippet from a dict
playlist_image_snippet_from_dict = PlaylistImageSnippet.from_dict(playlist_image_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


