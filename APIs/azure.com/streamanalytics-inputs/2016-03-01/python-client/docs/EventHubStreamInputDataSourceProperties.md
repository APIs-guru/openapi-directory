# EventHubStreamInputDataSourceProperties

The properties that are associated with a Event Hub input containing stream data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_group_name** | **str** | The name of an Event Hub Consumer Group that should be used to read events from the Event Hub. Specifying distinct consumer group names for multiple inputs allows each of those inputs to receive the same events from the Event Hub. If not specified, the input uses the Event Hub’s default consumer group. | [optional] 
**event_hub_name** | **str** | The name of the Event Hub. Required on PUT (CreateOrReplace) requests. | [optional] 
**service_bus_namespace** | **str** | The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. | [optional] 
**shared_access_policy_key** | **str** | The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests. | [optional] 
**shared_access_policy_name** | **str** | The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. | [optional] 

## Example

```python
from openapi_client.models.event_hub_stream_input_data_source_properties import EventHubStreamInputDataSourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubStreamInputDataSourceProperties from a JSON string
event_hub_stream_input_data_source_properties_instance = EventHubStreamInputDataSourceProperties.from_json(json)
# print the JSON string representation of the object
print(EventHubStreamInputDataSourceProperties.to_json())

# convert the object into a dict
event_hub_stream_input_data_source_properties_dict = event_hub_stream_input_data_source_properties_instance.to_dict()
# create an instance of EventHubStreamInputDataSourceProperties from a dict
event_hub_stream_input_data_source_properties_from_dict = EventHubStreamInputDataSourceProperties.from_dict(event_hub_stream_input_data_source_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


