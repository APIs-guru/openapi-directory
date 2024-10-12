# ServiceBusTopicOutputDataSource

Describes a Service Bus Topic output data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServiceBusTopicOutputDataSourceProperties**](ServiceBusTopicOutputDataSourceProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_bus_topic_output_data_source import ServiceBusTopicOutputDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceBusTopicOutputDataSource from a JSON string
service_bus_topic_output_data_source_instance = ServiceBusTopicOutputDataSource.from_json(json)
# print the JSON string representation of the object
print(ServiceBusTopicOutputDataSource.to_json())

# convert the object into a dict
service_bus_topic_output_data_source_dict = service_bus_topic_output_data_source_instance.to_dict()
# create an instance of ServiceBusTopicOutputDataSource from a dict
service_bus_topic_output_data_source_from_dict = ServiceBusTopicOutputDataSource.from_dict(service_bus_topic_output_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


