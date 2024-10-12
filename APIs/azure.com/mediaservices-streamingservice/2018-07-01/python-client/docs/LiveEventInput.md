# LiveEventInput

The Live Event input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_control** | [**LiveEventInputAccessControl**](LiveEventInputAccessControl.md) |  | [optional] 
**access_token** | **str** | A unique identifier for a stream.  This can be specified at creation time but cannot be updated.  If omitted, the service will generate a unique value. | [optional] 
**endpoints** | [**List[LiveEventEndpoint]**](LiveEventEndpoint.md) | The input endpoints for the Live Event. | [optional] 
**key_frame_interval_duration** | **str** | ISO 8601 timespan duration of the key frame interval duration. | [optional] 
**streaming_protocol** | **str** | The streaming protocol for the Live Event.  This is specified at creation time and cannot be updated. | 

## Example

```python
from openapi_client.models.live_event_input import LiveEventInput

# TODO update the JSON string below
json = "{}"
# create an instance of LiveEventInput from a JSON string
live_event_input_instance = LiveEventInput.from_json(json)
# print the JSON string representation of the object
print(LiveEventInput.to_json())

# convert the object into a dict
live_event_input_dict = live_event_input_instance.to_dict()
# create an instance of LiveEventInput from a dict
live_event_input_from_dict = LiveEventInput.from_dict(live_event_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


