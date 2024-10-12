# EventHubEventSourceCreateOrUpdateParameters

Parameters supplied to the Create or Update Event Source operation for an EventHub event source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EventHubEventSourceCreationProperties**](EventHubEventSourceCreationProperties.md) |  | 
**kind** | **str** | The kind of the event source. | 
**location** | **str** | The location of the resource. | 
**tags** | **Dict[str, str]** | Key-value pairs of additional properties for the resource. | [optional] 

## Example

```python
from openapi_client.models.event_hub_event_source_create_or_update_parameters import EventHubEventSourceCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubEventSourceCreateOrUpdateParameters from a JSON string
event_hub_event_source_create_or_update_parameters_instance = EventHubEventSourceCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(EventHubEventSourceCreateOrUpdateParameters.to_json())

# convert the object into a dict
event_hub_event_source_create_or_update_parameters_dict = event_hub_event_source_create_or_update_parameters_instance.to_dict()
# create an instance of EventHubEventSourceCreateOrUpdateParameters from a dict
event_hub_event_source_create_or_update_parameters_from_dict = EventHubEventSourceCreateOrUpdateParameters.from_dict(event_hub_event_source_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


