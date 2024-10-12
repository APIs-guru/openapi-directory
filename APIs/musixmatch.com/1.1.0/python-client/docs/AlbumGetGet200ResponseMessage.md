# AlbumGetGet200ResponseMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | [**AlbumGetGet200ResponseMessageBody**](AlbumGetGet200ResponseMessageBody.md) |  | [optional] 
**header** | [**AlbumGetGet200ResponseMessageHeader**](AlbumGetGet200ResponseMessageHeader.md) |  | [optional] 

## Example

```python
from openapi_client.models.album_get_get200_response_message import AlbumGetGet200ResponseMessage

# TODO update the JSON string below
json = "{}"
# create an instance of AlbumGetGet200ResponseMessage from a JSON string
album_get_get200_response_message_instance = AlbumGetGet200ResponseMessage.from_json(json)
# print the JSON string representation of the object
print(AlbumGetGet200ResponseMessage.to_json())

# convert the object into a dict
album_get_get200_response_message_dict = album_get_get200_response_message_instance.to_dict()
# create an instance of AlbumGetGet200ResponseMessage from a dict
album_get_get200_response_message_from_dict = AlbumGetGet200ResponseMessage.from_dict(album_get_get200_response_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


