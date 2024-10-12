# WatchSettings

Branding properties for the watch. All deprecated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color** | **str** | The text color for the video watch page&#39;s branded area. | [optional] 
**featured_playlist_id** | **str** | An ID that uniquely identifies a playlist that displays next to the video player. | [optional] 
**text_color** | **str** | The background color for the video watch page&#39;s branded area. | [optional] 

## Example

```python
from openapi_client.models.watch_settings import WatchSettings

# TODO update the JSON string below
json = "{}"
# create an instance of WatchSettings from a JSON string
watch_settings_instance = WatchSettings.from_json(json)
# print the JSON string representation of the object
print(WatchSettings.to_json())

# convert the object into a dict
watch_settings_dict = watch_settings_instance.to_dict()
# create an instance of WatchSettings from a dict
watch_settings_from_dict = WatchSettings.from_dict(watch_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


