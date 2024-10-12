# ArtistAlbumsGetGet200ResponseMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | [**ArtistAlbumsGetGet200ResponseMessageBody**](ArtistAlbumsGetGet200ResponseMessageBody.md) |  | [optional] 
**header** | [**AlbumTracksGetGet200ResponseMessageHeader**](AlbumTracksGetGet200ResponseMessageHeader.md) |  | [optional] 

## Example

```python
from openapi_client.models.artist_albums_get_get200_response_message import ArtistAlbumsGetGet200ResponseMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ArtistAlbumsGetGet200ResponseMessage from a JSON string
artist_albums_get_get200_response_message_instance = ArtistAlbumsGetGet200ResponseMessage.from_json(json)
# print the JSON string representation of the object
print(ArtistAlbumsGetGet200ResponseMessage.to_json())

# convert the object into a dict
artist_albums_get_get200_response_message_dict = artist_albums_get_get200_response_message_instance.to_dict()
# create an instance of ArtistAlbumsGetGet200ResponseMessage from a dict
artist_albums_get_get200_response_message_from_dict = ArtistAlbumsGetGet200ResponseMessage.from_dict(artist_albums_get_get200_response_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


