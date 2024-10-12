# TrackingEventsDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[TrackingEvent]**](TrackingEvent.md) |  | 
**source_type** | **str** |  | 
**track_events_options** | [**TrackEventsOperationOptions**](TrackEventsOperationOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.tracking_events_definition import TrackingEventsDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of TrackingEventsDefinition from a JSON string
tracking_events_definition_instance = TrackingEventsDefinition.from_json(json)
# print the JSON string representation of the object
print(TrackingEventsDefinition.to_json())

# convert the object into a dict
tracking_events_definition_dict = tracking_events_definition_instance.to_dict()
# create an instance of TrackingEventsDefinition from a dict
tracking_events_definition_from_dict = TrackingEventsDefinition.from_dict(tracking_events_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


