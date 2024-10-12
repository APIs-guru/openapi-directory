# ServiceBusDataSourceProperties

The common properties that are associated with Service Bus data sources (Queues, Topics, Event Hubs, etc.).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_bus_namespace** | **str** | The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. | [optional] 
**shared_access_policy_key** | **str** | The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests. | [optional] 
**shared_access_policy_name** | **str** | The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. | [optional] 

## Example

```python
from openapi_client.models.service_bus_data_source_properties import ServiceBusDataSourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceBusDataSourceProperties from a JSON string
service_bus_data_source_properties_instance = ServiceBusDataSourceProperties.from_json(json)
# print the JSON string representation of the object
print(ServiceBusDataSourceProperties.to_json())

# convert the object into a dict
service_bus_data_source_properties_dict = service_bus_data_source_properties_instance.to_dict()
# create an instance of ServiceBusDataSourceProperties from a dict
service_bus_data_source_properties_from_dict = ServiceBusDataSourceProperties.from_dict(service_bus_data_source_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


