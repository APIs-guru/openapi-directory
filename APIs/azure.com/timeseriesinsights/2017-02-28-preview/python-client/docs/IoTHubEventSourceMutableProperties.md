# IoTHubEventSourceMutableProperties

An object that represents a set of mutable IoTHub event source resource properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shared_access_key** | **str** | The value of the shared access key that grants the Time Series Insights service read access to the iot hub. This property is not shown in event source responses. | [optional] 
**local_timestamp** | [**LocalTimestamp**](LocalTimestamp.md) |  | [optional] 
**timestamp_property_name** | **str** | The event property that will be used as the event source&#39;s timestamp. If a value isn&#39;t specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used. | [optional] 

## Example

```python
from openapi_client.models.io_t_hub_event_source_mutable_properties import IoTHubEventSourceMutableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IoTHubEventSourceMutableProperties from a JSON string
io_t_hub_event_source_mutable_properties_instance = IoTHubEventSourceMutableProperties.from_json(json)
# print the JSON string representation of the object
print(IoTHubEventSourceMutableProperties.to_json())

# convert the object into a dict
io_t_hub_event_source_mutable_properties_dict = io_t_hub_event_source_mutable_properties_instance.to_dict()
# create an instance of IoTHubEventSourceMutableProperties from a dict
io_t_hub_event_source_mutable_properties_from_dict = IoTHubEventSourceMutableProperties.from_dict(io_t_hub_event_source_mutable_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


