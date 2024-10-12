# IoTHubEventSourceCommonProperties

Properties of the IoTHub event source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_group_name** | **str** | The name of the iot hub&#39;s consumer group that holds the partitions from which events will be read. | 
**iot_hub_name** | **str** | The name of the iot hub. | 
**key_name** | **str** | The name of the Shared Access Policy key that grants the Time Series Insights service access to the iot hub. This shared access policy key must grant &#39;service connect&#39; permissions to the iot hub. | 
**event_source_resource_id** | **str** | The resource id of the event source in Azure Resource Manager. | 
**timestamp_property_name** | **str** | The event property that will be used as the event source&#39;s timestamp. If a value isn&#39;t specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used. | [optional] 
**creation_time** | **datetime** | The time the resource was created. | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.io_t_hub_event_source_common_properties import IoTHubEventSourceCommonProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IoTHubEventSourceCommonProperties from a JSON string
io_t_hub_event_source_common_properties_instance = IoTHubEventSourceCommonProperties.from_json(json)
# print the JSON string representation of the object
print(IoTHubEventSourceCommonProperties.to_json())

# convert the object into a dict
io_t_hub_event_source_common_properties_dict = io_t_hub_event_source_common_properties_instance.to_dict()
# create an instance of IoTHubEventSourceCommonProperties from a dict
io_t_hub_event_source_common_properties_from_dict = IoTHubEventSourceCommonProperties.from_dict(io_t_hub_event_source_common_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


