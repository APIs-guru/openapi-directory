# PlaylistSnippet

Basic details about a playlist, including title, description and thumbnails.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** | The ID that YouTube uses to uniquely identify the channel that published the playlist. | [optional] 
**channel_title** | **str** | The channel title of the channel that the video belongs to. | [optional] 
**default_language** | **str** | The language of the playlist&#39;s default title and description. | [optional] 
**description** | **str** | The playlist&#39;s description. | [optional] 
**localized** | [**PlaylistLocalization**](PlaylistLocalization.md) |  | [optional] 
**published_at** | **datetime** | The date and time that the playlist was created. | [optional] 
**tags** | **List[str]** | Keyword tags associated with the playlist. | [optional] 
**thumbnail_video_id** | **str** | Note: if the playlist has a custom thumbnail, this field will not be populated. The video id selected by the user that will be used as the thumbnail of this playlist. This field defaults to the first publicly viewable video in the playlist, if: 1. The user has never selected a video to be the thumbnail of the playlist. 2. The user selects a video to be the thumbnail, and then removes that video from the playlist. 3. The user selects a non-owned video to be the thumbnail, but that video becomes private, or gets deleted. | [optional] 
**thumbnails** | [**ThumbnailDetails**](ThumbnailDetails.md) |  | [optional] 
**title** | **str** | The playlist&#39;s title. | [optional] 

## Example

```python
from openapi_client.models.playlist_snippet import PlaylistSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of PlaylistSnippet from a JSON string
playlist_snippet_instance = PlaylistSnippet.from_json(json)
# print the JSON string representation of the object
print(PlaylistSnippet.to_json())

# convert the object into a dict
playlist_snippet_dict = playlist_snippet_instance.to_dict()
# create an instance of PlaylistSnippet from a dict
playlist_snippet_from_dict = PlaylistSnippet.from_dict(playlist_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


