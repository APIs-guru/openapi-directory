# LiveEventInputAccessControl

The IP access control for Live Event Input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip** | [**IPAccessControl**](IPAccessControl.md) |  | [optional] 

## Example

```python
from openapi_client.models.live_event_input_access_control import LiveEventInputAccessControl

# TODO update the JSON string below
json = "{}"
# create an instance of LiveEventInputAccessControl from a JSON string
live_event_input_access_control_instance = LiveEventInputAccessControl.from_json(json)
# print the JSON string representation of the object
print(LiveEventInputAccessControl.to_json())

# convert the object into a dict
live_event_input_access_control_dict = live_event_input_access_control_instance.to_dict()
# create an instance of LiveEventInputAccessControl from a dict
live_event_input_access_control_from_dict = LiveEventInputAccessControl.from_dict(live_event_input_access_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


