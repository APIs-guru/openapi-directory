# EventSourceCommonProperties

Properties of the event source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp_property_name** | **str** | The event property that will be used as the event source&#39;s timestamp. If a value isn&#39;t specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used. | [optional] 
**creation_time** | **datetime** | The time the resource was created. | [optional] [readonly] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 

## Example

```python
from openapi_client.models.event_source_common_properties import EventSourceCommonProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EventSourceCommonProperties from a JSON string
event_source_common_properties_instance = EventSourceCommonProperties.from_json(json)
# print the JSON string representation of the object
print(EventSourceCommonProperties.to_json())

# convert the object into a dict
event_source_common_properties_dict = event_source_common_properties_instance.to_dict()
# create an instance of EventSourceCommonProperties from a dict
event_source_common_properties_from_dict = EventSourceCommonProperties.from_dict(event_source_common_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


