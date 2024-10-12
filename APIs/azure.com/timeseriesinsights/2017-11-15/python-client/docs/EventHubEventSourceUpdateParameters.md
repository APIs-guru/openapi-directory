# EventHubEventSourceUpdateParameters

Parameters supplied to the Update Event Source operation to update an EventHub event source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EventHubEventSourceMutableProperties**](EventHubEventSourceMutableProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Key-value pairs of additional properties for the event source. | [optional] 

## Example

```python
from openapi_client.models.event_hub_event_source_update_parameters import EventHubEventSourceUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubEventSourceUpdateParameters from a JSON string
event_hub_event_source_update_parameters_instance = EventHubEventSourceUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(EventHubEventSourceUpdateParameters.to_json())

# convert the object into a dict
event_hub_event_source_update_parameters_dict = event_hub_event_source_update_parameters_instance.to_dict()
# create an instance of EventHubEventSourceUpdateParameters from a dict
event_hub_event_source_update_parameters_from_dict = EventHubEventSourceUpdateParameters.from_dict(event_hub_event_source_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


