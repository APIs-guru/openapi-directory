# LiveEventActionInput

The LiveEvent action input parameter definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remove_outputs_on_stop** | **bool** | The flag indicates if remove LiveOutputs on Stop. | [optional] 

## Example

```python
from openapi_client.models.live_event_action_input import LiveEventActionInput

# TODO update the JSON string below
json = "{}"
# create an instance of LiveEventActionInput from a JSON string
live_event_action_input_instance = LiveEventActionInput.from_json(json)
# print the JSON string representation of the object
print(LiveEventActionInput.to_json())

# convert the object into a dict
live_event_action_input_dict = live_event_action_input_instance.to_dict()
# create an instance of LiveEventActionInput from a dict
live_event_action_input_from_dict = LiveEventActionInput.from_dict(live_event_action_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


