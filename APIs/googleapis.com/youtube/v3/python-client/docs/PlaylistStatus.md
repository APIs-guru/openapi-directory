# PlaylistStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**privacy_status** | **str** | The playlist&#39;s privacy status. | [optional] 

## Example

```python
from openapi_client.models.playlist_status import PlaylistStatus

# TODO update the JSON string below
json = "{}"
# create an instance of PlaylistStatus from a JSON string
playlist_status_instance = PlaylistStatus.from_json(json)
# print the JSON string representation of the object
print(PlaylistStatus.to_json())

# convert the object into a dict
playlist_status_dict = playlist_status_instance.to_dict()
# create an instance of PlaylistStatus from a dict
playlist_status_from_dict = PlaylistStatus.from_dict(playlist_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


