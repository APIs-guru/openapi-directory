# PlayMediaControlActivity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**play_elapsed** | **int** |  | [optional] 
**play_elapsed_interval** | **int** |  | [optional] 
**play_paused** | **int** |  | [optional] [default to 5]

## Example

```python
from openapi_client.models.play_media_control_activity import PlayMediaControlActivity

# TODO update the JSON string below
json = "{}"
# create an instance of PlayMediaControlActivity from a JSON string
play_media_control_activity_instance = PlayMediaControlActivity.from_json(json)
# print the JSON string representation of the object
print(PlayMediaControlActivity.to_json())

# convert the object into a dict
play_media_control_activity_dict = play_media_control_activity_instance.to_dict()
# create an instance of PlayMediaControlActivity from a dict
play_media_control_activity_from_dict = PlayMediaControlActivity.from_dict(play_media_control_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


