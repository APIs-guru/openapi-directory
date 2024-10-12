# ArtistRelatedGetGet200ResponseMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | [**ArtistRelatedGetGet200ResponseMessageBody**](ArtistRelatedGetGet200ResponseMessageBody.md) |  | [optional] 
**header** | [**AlbumTracksGetGet200ResponseMessageHeader**](AlbumTracksGetGet200ResponseMessageHeader.md) |  | [optional] 

## Example

```python
from openapi_client.models.artist_related_get_get200_response_message import ArtistRelatedGetGet200ResponseMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ArtistRelatedGetGet200ResponseMessage from a JSON string
artist_related_get_get200_response_message_instance = ArtistRelatedGetGet200ResponseMessage.from_json(json)
# print the JSON string representation of the object
print(ArtistRelatedGetGet200ResponseMessage.to_json())

# convert the object into a dict
artist_related_get_get200_response_message_dict = artist_related_get_get200_response_message_instance.to_dict()
# create an instance of ArtistRelatedGetGet200ResponseMessage from a dict
artist_related_get_get200_response_message_from_dict = ArtistRelatedGetGet200ResponseMessage.from_dict(artist_related_get_get200_response_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


