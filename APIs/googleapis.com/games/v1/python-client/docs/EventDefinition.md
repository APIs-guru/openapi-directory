# EventDefinition

An event definition resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_events** | [**List[EventChild]**](EventChild.md) | A list of events that are a child of this event. | [optional] 
**description** | **str** | Description of what this event represents. | [optional] 
**display_name** | **str** | The name to display for the event. | [optional] 
**id** | **str** | The ID of the event. | [optional] 
**image_url** | **str** | The base URL for the image that represents the event. | [optional] 
**is_default_image_url** | **bool** | Indicates whether the icon image being returned is a default image, or is game-provided. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#eventDefinition&#x60;. | [optional] 
**visibility** | **str** | The visibility of event being tracked in this definition. | [optional] 

## Example

```python
from openapi_client.models.event_definition import EventDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of EventDefinition from a JSON string
event_definition_instance = EventDefinition.from_json(json)
# print the JSON string representation of the object
print(EventDefinition.to_json())

# convert the object into a dict
event_definition_dict = event_definition_instance.to_dict()
# create an instance of EventDefinition from a dict
event_definition_from_dict = EventDefinition.from_dict(event_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


