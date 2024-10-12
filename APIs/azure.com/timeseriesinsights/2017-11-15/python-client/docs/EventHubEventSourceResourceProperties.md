# EventHubEventSourceResourceProperties

Properties of the EventHub event source resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_group_name** | **str** | The name of the event hub&#39;s consumer group that holds the partitions from which events will be read. | 
**event_hub_name** | **str** | The name of the event hub. | 
**key_name** | **str** | The name of the SAS key that grants the Time Series Insights service access to the event hub. The shared access policies for this key must grant &#39;Listen&#39; permissions to the event hub. | 
**service_bus_namespace** | **str** | The name of the service bus that contains the event hub. | 
**event_source_resource_id** | **str** | The resource id of the event source in Azure Resource Manager. | 
**timestamp_property_name** | **str** | The event property that will be used as the event source&#39;s timestamp. If a value isn&#39;t specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used. | [optional] 
**creation_time** | **datetime** | The time the resource was created. | [optional] [readonly] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 

## Example

```python
from openapi_client.models.event_hub_event_source_resource_properties import EventHubEventSourceResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubEventSourceResourceProperties from a JSON string
event_hub_event_source_resource_properties_instance = EventHubEventSourceResourceProperties.from_json(json)
# print the JSON string representation of the object
print(EventHubEventSourceResourceProperties.to_json())

# convert the object into a dict
event_hub_event_source_resource_properties_dict = event_hub_event_source_resource_properties_instance.to_dict()
# create an instance of EventHubEventSourceResourceProperties from a dict
event_hub_event_source_resource_properties_from_dict = EventHubEventSourceResourceProperties.from_dict(event_hub_event_source_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


