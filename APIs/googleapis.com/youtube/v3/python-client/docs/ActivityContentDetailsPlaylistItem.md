# ActivityContentDetailsPlaylistItem

Information about a new playlist item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**playlist_id** | **str** | The value that YouTube uses to uniquely identify the playlist. | [optional] 
**playlist_item_id** | **str** | ID of the item within the playlist. | [optional] 
**resource_id** | [**ResourceId**](ResourceId.md) |  | [optional] 

## Example

```python
from openapi_client.models.activity_content_details_playlist_item import ActivityContentDetailsPlaylistItem

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityContentDetailsPlaylistItem from a JSON string
activity_content_details_playlist_item_instance = ActivityContentDetailsPlaylistItem.from_json(json)
# print the JSON string representation of the object
print(ActivityContentDetailsPlaylistItem.to_json())

# convert the object into a dict
activity_content_details_playlist_item_dict = activity_content_details_playlist_item_instance.to_dict()
# create an instance of ActivityContentDetailsPlaylistItem from a dict
activity_content_details_playlist_item_from_dict = ActivityContentDetailsPlaylistItem.from_dict(activity_content_details_playlist_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


