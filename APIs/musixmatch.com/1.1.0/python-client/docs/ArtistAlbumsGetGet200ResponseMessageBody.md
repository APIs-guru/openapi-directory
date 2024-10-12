# ArtistAlbumsGetGet200ResponseMessageBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**album_list** | [**List[AlbumGetGet200ResponseMessageBody]**](AlbumGetGet200ResponseMessageBody.md) | A list of albums | [optional] 

## Example

```python
from openapi_client.models.artist_albums_get_get200_response_message_body import ArtistAlbumsGetGet200ResponseMessageBody

# TODO update the JSON string below
json = "{}"
# create an instance of ArtistAlbumsGetGet200ResponseMessageBody from a JSON string
artist_albums_get_get200_response_message_body_instance = ArtistAlbumsGetGet200ResponseMessageBody.from_json(json)
# print the JSON string representation of the object
print(ArtistAlbumsGetGet200ResponseMessageBody.to_json())

# convert the object into a dict
artist_albums_get_get200_response_message_body_dict = artist_albums_get_get200_response_message_body_instance.to_dict()
# create an instance of ArtistAlbumsGetGet200ResponseMessageBody from a dict
artist_albums_get_get200_response_message_body_from_dict = ArtistAlbumsGetGet200ResponseMessageBody.from_dict(artist_albums_get_get200_response_message_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


