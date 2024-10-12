# EventTypeProperties

Properties of the event type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the event type. | [optional] 
**display_name** | **str** | Display name of the event type. | [optional] 
**is_in_default_set** | **bool** | IsInDefaultSet flag of the event type. | [optional] 
**schema_url** | **str** | Url of the schema for this event type. | [optional] 

## Example

```python
from openapi_client.models.event_type_properties import EventTypeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EventTypeProperties from a JSON string
event_type_properties_instance = EventTypeProperties.from_json(json)
# print the JSON string representation of the object
print(EventTypeProperties.to_json())

# convert the object into a dict
event_type_properties_dict = event_type_properties_instance.to_dict()
# create an instance of EventTypeProperties from a dict
event_type_properties_from_dict = EventTypeProperties.from_dict(event_type_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


