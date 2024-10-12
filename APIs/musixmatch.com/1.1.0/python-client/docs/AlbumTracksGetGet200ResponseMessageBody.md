# AlbumTracksGetGet200ResponseMessageBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**track_list** | [**List[Track]**](Track.md) | A list of tracks | [optional] 

## Example

```python
from openapi_client.models.album_tracks_get_get200_response_message_body import AlbumTracksGetGet200ResponseMessageBody

# TODO update the JSON string below
json = "{}"
# create an instance of AlbumTracksGetGet200ResponseMessageBody from a JSON string
album_tracks_get_get200_response_message_body_instance = AlbumTracksGetGet200ResponseMessageBody.from_json(json)
# print the JSON string representation of the object
print(AlbumTracksGetGet200ResponseMessageBody.to_json())

# convert the object into a dict
album_tracks_get_get200_response_message_body_dict = album_tracks_get_get200_response_message_body_instance.to_dict()
# create an instance of AlbumTracksGetGet200ResponseMessageBody from a dict
album_tracks_get_get200_response_message_body_from_dict = AlbumTracksGetGet200ResponseMessageBody.from_dict(album_tracks_get_get200_response_message_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


