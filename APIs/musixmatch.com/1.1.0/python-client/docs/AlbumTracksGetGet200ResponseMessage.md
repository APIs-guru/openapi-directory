# AlbumTracksGetGet200ResponseMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | [**AlbumTracksGetGet200ResponseMessageBody**](AlbumTracksGetGet200ResponseMessageBody.md) |  | [optional] 
**header** | [**AlbumTracksGetGet200ResponseMessageHeader**](AlbumTracksGetGet200ResponseMessageHeader.md) |  | [optional] 

## Example

```python
from openapi_client.models.album_tracks_get_get200_response_message import AlbumTracksGetGet200ResponseMessage

# TODO update the JSON string below
json = "{}"
# create an instance of AlbumTracksGetGet200ResponseMessage from a JSON string
album_tracks_get_get200_response_message_instance = AlbumTracksGetGet200ResponseMessage.from_json(json)
# print the JSON string representation of the object
print(AlbumTracksGetGet200ResponseMessage.to_json())

# convert the object into a dict
album_tracks_get_get200_response_message_dict = album_tracks_get_get200_response_message_instance.to_dict()
# create an instance of AlbumTracksGetGet200ResponseMessage from a dict
album_tracks_get_get200_response_message_from_dict = AlbumTracksGetGet200ResponseMessage.from_dict(album_tracks_get_get200_response_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


