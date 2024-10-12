# ArtistGetGet200ResponseMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | [**ArtistGetGet200ResponseMessageBody**](ArtistGetGet200ResponseMessageBody.md) |  | [optional] 
**header** | [**AlbumGetGet200ResponseMessageHeader**](AlbumGetGet200ResponseMessageHeader.md) |  | [optional] 

## Example

```python
from openapi_client.models.artist_get_get200_response_message import ArtistGetGet200ResponseMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ArtistGetGet200ResponseMessage from a JSON string
artist_get_get200_response_message_instance = ArtistGetGet200ResponseMessage.from_json(json)
# print the JSON string representation of the object
print(ArtistGetGet200ResponseMessage.to_json())

# convert the object into a dict
artist_get_get200_response_message_dict = artist_get_get200_response_message_instance.to_dict()
# create an instance of ArtistGetGet200ResponseMessage from a dict
artist_get_get200_response_message_from_dict = ArtistGetGet200ResponseMessage.from_dict(artist_get_get200_response_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


