# MediaDestinationPlaylist


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**media_destination_type** | **str** |  | 
**playlist_name** | **str** |  | 

## Example

```python
from openapi_client.models.media_destination_playlist import MediaDestinationPlaylist

# TODO update the JSON string below
json = "{}"
# create an instance of MediaDestinationPlaylist from a JSON string
media_destination_playlist_instance = MediaDestinationPlaylist.from_json(json)
# print the JSON string representation of the object
print(MediaDestinationPlaylist.to_json())

# convert the object into a dict
media_destination_playlist_dict = media_destination_playlist_instance.to_dict()
# create an instance of MediaDestinationPlaylist from a dict
media_destination_playlist_from_dict = MediaDestinationPlaylist.from_dict(media_destination_playlist_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


