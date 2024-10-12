# ServiceBusQueueOutputDataSource

Describes a Service Bus Queue output data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServiceBusQueueOutputDataSourceProperties**](ServiceBusQueueOutputDataSourceProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_bus_queue_output_data_source import ServiceBusQueueOutputDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceBusQueueOutputDataSource from a JSON string
service_bus_queue_output_data_source_instance = ServiceBusQueueOutputDataSource.from_json(json)
# print the JSON string representation of the object
print(ServiceBusQueueOutputDataSource.to_json())

# convert the object into a dict
service_bus_queue_output_data_source_dict = service_bus_queue_output_data_source_instance.to_dict()
# create an instance of ServiceBusQueueOutputDataSource from a dict
service_bus_queue_output_data_source_from_dict = ServiceBusQueueOutputDataSource.from_dict(service_bus_queue_output_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


