# LiveEventInputTrackSelection

A track selection condition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **str** | Comparing operation. | [optional] 
**var_property** | **str** | Property name to select. | [optional] 
**value** | **str** | Property value to select. | [optional] 

## Example

```python
from openapi_client.models.live_event_input_track_selection import LiveEventInputTrackSelection

# TODO update the JSON string below
json = "{}"
# create an instance of LiveEventInputTrackSelection from a JSON string
live_event_input_track_selection_instance = LiveEventInputTrackSelection.from_json(json)
# print the JSON string representation of the object
print(LiveEventInputTrackSelection.to_json())

# convert the object into a dict
live_event_input_track_selection_dict = live_event_input_track_selection_instance.to_dict()
# create an instance of LiveEventInputTrackSelection from a dict
live_event_input_track_selection_from_dict = LiveEventInputTrackSelection.from_dict(live_event_input_track_selection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


