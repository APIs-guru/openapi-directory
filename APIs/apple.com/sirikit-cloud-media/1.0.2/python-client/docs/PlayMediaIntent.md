# PlayMediaIntent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_class** | **str** |  | [optional] 
**media_items** | [**List[MediaItem]**](MediaItem.md) |  | [optional] 
**media_search** | [**MediaSearch**](MediaSearch.md) |  | [optional] 
**play_shuffled** | **bool** |  | [optional] 
**playback_queue_location** | [**PlaybackQueueLocation**](PlaybackQueueLocation.md) |  | [optional] 
**playback_repeat_mode** | [**PlaybackRepeatMode**](PlaybackRepeatMode.md) |  | [optional] 
**playback_speed** | **float** |  | [optional] 
**resume_playback** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.play_media_intent import PlayMediaIntent

# TODO update the JSON string below
json = "{}"
# create an instance of PlayMediaIntent from a JSON string
play_media_intent_instance = PlayMediaIntent.from_json(json)
# print the JSON string representation of the object
print(PlayMediaIntent.to_json())

# convert the object into a dict
play_media_intent_dict = play_media_intent_instance.to_dict()
# create an instance of PlayMediaIntent from a dict
play_media_intent_from_dict = PlayMediaIntent.from_dict(play_media_intent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


