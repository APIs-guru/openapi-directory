# StopLostModeUserAttemptEvent

A lost mode event indicating the user has attempted to stop lost mode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The status of the attempt to stop lost mode. | [optional] 

## Example

```python
from openapi_client.models.stop_lost_mode_user_attempt_event import StopLostModeUserAttemptEvent

# TODO update the JSON string below
json = "{}"
# create an instance of StopLostModeUserAttemptEvent from a JSON string
stop_lost_mode_user_attempt_event_instance = StopLostModeUserAttemptEvent.from_json(json)
# print the JSON string representation of the object
print(StopLostModeUserAttemptEvent.to_json())

# convert the object into a dict
stop_lost_mode_user_attempt_event_dict = stop_lost_mode_user_attempt_event_instance.to_dict()
# create an instance of StopLostModeUserAttemptEvent from a dict
stop_lost_mode_user_attempt_event_from_dict = StopLostModeUserAttemptEvent.from_dict(stop_lost_mode_user_attempt_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


