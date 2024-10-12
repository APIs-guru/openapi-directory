# EventHubEventSourceMutableProperties

An object that represents a set of mutable EventHub event source resource properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shared_access_key** | **str** | The value of the shared access key that grants the Time Series Insights service read access to the event hub. This property is not shown in event source responses. | [optional] 
**local_timestamp** | [**LocalTimestamp**](LocalTimestamp.md) |  | [optional] 
**timestamp_property_name** | **str** | The event property that will be used as the event source&#39;s timestamp. If a value isn&#39;t specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used. | [optional] 

## Example

```python
from openapi_client.models.event_hub_event_source_mutable_properties import EventHubEventSourceMutableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubEventSourceMutableProperties from a JSON string
event_hub_event_source_mutable_properties_instance = EventHubEventSourceMutableProperties.from_json(json)
# print the JSON string representation of the object
print(EventHubEventSourceMutableProperties.to_json())

# convert the object into a dict
event_hub_event_source_mutable_properties_dict = event_hub_event_source_mutable_properties_instance.to_dict()
# create an instance of EventHubEventSourceMutableProperties from a dict
event_hub_event_source_mutable_properties_from_dict = EventHubEventSourceMutableProperties.from_dict(event_hub_event_source_mutable_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


