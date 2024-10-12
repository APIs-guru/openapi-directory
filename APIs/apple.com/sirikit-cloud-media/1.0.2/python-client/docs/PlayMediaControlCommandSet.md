# PlayMediaControlCommandSet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bookmark_track** | **bool** |  | [optional] 
**dislike_track** | **bool** |  | [optional] 
**like_track** | **bool** |  | [optional] 
**next_track** | **bool** |  | [optional] 
**prefer_skip_backward** | **bool** |  | [optional] 
**prefer_skip_forward** | **bool** |  | [optional] 
**previous_track** | **bool** |  | [optional] 
**seek_to_playback_position** | **bool** |  | [optional] 
**skip_backward** | **bool** |  | [optional] 
**skip_forward** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.play_media_control_command_set import PlayMediaControlCommandSet

# TODO update the JSON string below
json = "{}"
# create an instance of PlayMediaControlCommandSet from a JSON string
play_media_control_command_set_instance = PlayMediaControlCommandSet.from_json(json)
# print the JSON string representation of the object
print(PlayMediaControlCommandSet.to_json())

# convert the object into a dict
play_media_control_command_set_dict = play_media_control_command_set_instance.to_dict()
# create an instance of PlayMediaControlCommandSet from a dict
play_media_control_command_set_from_dict = PlayMediaControlCommandSet.from_dict(play_media_control_command_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


