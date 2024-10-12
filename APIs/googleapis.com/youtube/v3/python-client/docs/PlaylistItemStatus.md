# PlaylistItemStatus

Information about the playlist item's privacy status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**privacy_status** | **str** | This resource&#39;s privacy status. | [optional] 

## Example

```python
from openapi_client.models.playlist_item_status import PlaylistItemStatus

# TODO update the JSON string below
json = "{}"
# create an instance of PlaylistItemStatus from a JSON string
playlist_item_status_instance = PlaylistItemStatus.from_json(json)
# print the JSON string representation of the object
print(PlaylistItemStatus.to_json())

# convert the object into a dict
playlist_item_status_dict = playlist_item_status_instance.to_dict()
# create an instance of PlaylistItemStatus from a dict
playlist_item_status_from_dict = PlaylistItemStatus.from_dict(playlist_item_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


