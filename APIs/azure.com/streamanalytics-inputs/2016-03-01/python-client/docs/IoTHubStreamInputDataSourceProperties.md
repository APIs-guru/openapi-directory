# IoTHubStreamInputDataSourceProperties

The properties that are associated with a IoT Hub input containing stream data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_group_name** | **str** | The name of an IoT Hub Consumer Group that should be used to read events from the IoT Hub. If not specified, the input uses the Iot Hub’s default consumer group. | [optional] 
**endpoint** | **str** | The IoT Hub endpoint to connect to (ie. messages/events, messages/operationsMonitoringEvents, etc.). | [optional] 
**iot_hub_namespace** | **str** | The name or the URI of the IoT Hub. Required on PUT (CreateOrReplace) requests. | [optional] 
**shared_access_policy_key** | **str** | The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests. | [optional] 
**shared_access_policy_name** | **str** | The shared access policy name for the IoT Hub. This policy must contain at least the Service connect permission. Required on PUT (CreateOrReplace) requests. | [optional] 

## Example

```python
from openapi_client.models.io_t_hub_stream_input_data_source_properties import IoTHubStreamInputDataSourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IoTHubStreamInputDataSourceProperties from a JSON string
io_t_hub_stream_input_data_source_properties_instance = IoTHubStreamInputDataSourceProperties.from_json(json)
# print the JSON string representation of the object
print(IoTHubStreamInputDataSourceProperties.to_json())

# convert the object into a dict
io_t_hub_stream_input_data_source_properties_dict = io_t_hub_stream_input_data_source_properties_instance.to_dict()
# create an instance of IoTHubStreamInputDataSourceProperties from a dict
io_t_hub_stream_input_data_source_properties_from_dict = IoTHubStreamInputDataSourceProperties.from_dict(io_t_hub_stream_input_data_source_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


