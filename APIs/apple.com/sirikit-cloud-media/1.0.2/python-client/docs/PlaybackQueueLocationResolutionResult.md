# PlaybackQueueLocationResolutionResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_class** | **str** |  | [optional] 
**confirmation_required** | **object** |  | [optional] 
**success** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.playback_queue_location_resolution_result import PlaybackQueueLocationResolutionResult

# TODO update the JSON string below
json = "{}"
# create an instance of PlaybackQueueLocationResolutionResult from a JSON string
playback_queue_location_resolution_result_instance = PlaybackQueueLocationResolutionResult.from_json(json)
# print the JSON string representation of the object
print(PlaybackQueueLocationResolutionResult.to_json())

# convert the object into a dict
playback_queue_location_resolution_result_dict = playback_queue_location_resolution_result_instance.to_dict()
# create an instance of PlaybackQueueLocationResolutionResult from a dict
playback_queue_location_resolution_result_from_dict = PlaybackQueueLocationResolutionResult.from_dict(playback_queue_location_resolution_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


