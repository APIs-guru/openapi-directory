# EventPropertyValue

An event property value with counts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The count of the the event property value. | [optional] 
**name** | **str** | The event property value name. | [optional] 
**previous_count** | **int** | The count of previous time range of the event property value. | [optional] 

## Example

```python
from openapi_client.models.event_property_value import EventPropertyValue

# TODO update the JSON string below
json = "{}"
# create an instance of EventPropertyValue from a JSON string
event_property_value_instance = EventPropertyValue.from_json(json)
# print the JSON string representation of the object
print(EventPropertyValue.to_json())

# convert the object into a dict
event_property_value_dict = event_property_value_instance.to_dict()
# create an instance of EventPropertyValue from a dict
event_property_value_from_dict = EventPropertyValue.from_dict(event_property_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


