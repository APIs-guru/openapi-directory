# EventSourceMutableProperties

An object that represents a set of mutable event source resource properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_timestamp** | [**LocalTimestamp**](LocalTimestamp.md) |  | [optional] 
**timestamp_property_name** | **str** | The event property that will be used as the event source&#39;s timestamp. If a value isn&#39;t specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used. | [optional] 

## Example

```python
from openapi_client.models.event_source_mutable_properties import EventSourceMutableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EventSourceMutableProperties from a JSON string
event_source_mutable_properties_instance = EventSourceMutableProperties.from_json(json)
# print the JSON string representation of the object
print(EventSourceMutableProperties.to_json())

# convert the object into a dict
event_source_mutable_properties_dict = event_source_mutable_properties_instance.to_dict()
# create an instance of EventSourceMutableProperties from a dict
event_source_mutable_properties_from_dict = EventSourceMutableProperties.from_dict(event_source_mutable_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


