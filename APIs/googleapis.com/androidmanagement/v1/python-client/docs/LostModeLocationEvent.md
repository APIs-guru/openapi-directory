# LostModeLocationEvent

A lost mode event containing the device location and battery level as a percentage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**battery_level** | **int** | The battery level as a number between 0 and 100 inclusive | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 

## Example

```python
from openapi_client.models.lost_mode_location_event import LostModeLocationEvent

# TODO update the JSON string below
json = "{}"
# create an instance of LostModeLocationEvent from a JSON string
lost_mode_location_event_instance = LostModeLocationEvent.from_json(json)
# print the JSON string representation of the object
print(LostModeLocationEvent.to_json())

# convert the object into a dict
lost_mode_location_event_dict = lost_mode_location_event_instance.to_dict()
# create an instance of LostModeLocationEvent from a dict
lost_mode_location_event_from_dict = LostModeLocationEvent.from_dict(lost_mode_location_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


