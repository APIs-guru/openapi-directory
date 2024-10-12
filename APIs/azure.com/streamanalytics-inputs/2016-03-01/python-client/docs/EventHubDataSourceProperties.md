# EventHubDataSourceProperties

The common properties that are associated with Event Hub data sources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_hub_name** | **str** | The name of the Event Hub. Required on PUT (CreateOrReplace) requests. | [optional] 
**service_bus_namespace** | **str** | The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. | [optional] 
**shared_access_policy_key** | **str** | The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests. | [optional] 
**shared_access_policy_name** | **str** | The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. | [optional] 

## Example

```python
from openapi_client.models.event_hub_data_source_properties import EventHubDataSourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubDataSourceProperties from a JSON string
event_hub_data_source_properties_instance = EventHubDataSourceProperties.from_json(json)
# print the JSON string representation of the object
print(EventHubDataSourceProperties.to_json())

# convert the object into a dict
event_hub_data_source_properties_dict = event_hub_data_source_properties_instance.to_dict()
# create an instance of EventHubDataSourceProperties from a dict
event_hub_data_source_properties_from_dict = EventHubDataSourceProperties.from_dict(event_hub_data_source_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


