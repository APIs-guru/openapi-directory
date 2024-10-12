# EventHubOutputDataSourceProperties

The properties that are associated with an Event Hub output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_key** | **str** | The key/column that is used to determine to which partition to send event data. | [optional] 
**event_hub_name** | **str** | The name of the Event Hub. Required on PUT (CreateOrReplace) requests. | [optional] 
**service_bus_namespace** | **str** | The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. | [optional] 
**shared_access_policy_key** | **str** | The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests. | [optional] 
**shared_access_policy_name** | **str** | The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. | [optional] 

## Example

```python
from openapi_client.models.event_hub_output_data_source_properties import EventHubOutputDataSourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubOutputDataSourceProperties from a JSON string
event_hub_output_data_source_properties_instance = EventHubOutputDataSourceProperties.from_json(json)
# print the JSON string representation of the object
print(EventHubOutputDataSourceProperties.to_json())

# convert the object into a dict
event_hub_output_data_source_properties_dict = event_hub_output_data_source_properties_instance.to_dict()
# create an instance of EventHubOutputDataSourceProperties from a dict
event_hub_output_data_source_properties_from_dict = EventHubOutputDataSourceProperties.from_dict(event_hub_output_data_source_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


