# PlaylistLocalization

Playlist localization setting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The localized strings for playlist&#39;s description. | [optional] 
**title** | **str** | The localized strings for playlist&#39;s title. | [optional] 

## Example

```python
from openapi_client.models.playlist_localization import PlaylistLocalization

# TODO update the JSON string below
json = "{}"
# create an instance of PlaylistLocalization from a JSON string
playlist_localization_instance = PlaylistLocalization.from_json(json)
# print the JSON string representation of the object
print(PlaylistLocalization.to_json())

# convert the object into a dict
playlist_localization_dict = playlist_localization_instance.to_dict()
# create an instance of PlaylistLocalization from a dict
playlist_localization_from_dict = PlaylistLocalization.from_dict(playlist_localization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


