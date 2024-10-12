# ServiceBusQueueOutputDataSourceProperties

The properties that are associated with a Service Bus Queue output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property_columns** | **List[str]** | A string array of the names of output columns to be attached to Service Bus messages as custom properties. | [optional] 
**queue_name** | **str** | The name of the Service Bus Queue. Required on PUT (CreateOrReplace) requests. | [optional] 
**service_bus_namespace** | **str** | The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. | [optional] 
**shared_access_policy_key** | **str** | The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests. | [optional] 
**shared_access_policy_name** | **str** | The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. | [optional] 

## Example

```python
from openapi_client.models.service_bus_queue_output_data_source_properties import ServiceBusQueueOutputDataSourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceBusQueueOutputDataSourceProperties from a JSON string
service_bus_queue_output_data_source_properties_instance = ServiceBusQueueOutputDataSourceProperties.from_json(json)
# print the JSON string representation of the object
print(ServiceBusQueueOutputDataSourceProperties.to_json())

# convert the object into a dict
service_bus_queue_output_data_source_properties_dict = service_bus_queue_output_data_source_properties_instance.to_dict()
# create an instance of ServiceBusQueueOutputDataSourceProperties from a dict
service_bus_queue_output_data_source_properties_from_dict = ServiceBusQueueOutputDataSourceProperties.from_dict(service_bus_queue_output_data_source_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


