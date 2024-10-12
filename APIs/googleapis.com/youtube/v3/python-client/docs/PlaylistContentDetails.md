# PlaylistContentDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_count** | **int** | The number of videos in the playlist. | [optional] 

## Example

```python
from openapi_client.models.playlist_content_details import PlaylistContentDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PlaylistContentDetails from a JSON string
playlist_content_details_instance = PlaylistContentDetails.from_json(json)
# print the JSON string representation of the object
print(PlaylistContentDetails.to_json())

# convert the object into a dict
playlist_content_details_dict = playlist_content_details_instance.to_dict()
# create an instance of PlaylistContentDetails from a dict
playlist_content_details_from_dict = PlaylistContentDetails.from_dict(playlist_content_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


