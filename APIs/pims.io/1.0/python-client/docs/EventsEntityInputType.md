# EventsEntityInputType

Input type of the event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | String identifying the input type of the event. | 
**label** | **str** | Label of the input type. This value is translated according to the &#39;Accept-Language&#39; header. | 

## Example

```python
from openapi_client.models.events_entity_input_type import EventsEntityInputType

# TODO update the JSON string below
json = "{}"
# create an instance of EventsEntityInputType from a JSON string
events_entity_input_type_instance = EventsEntityInputType.from_json(json)
# print the JSON string representation of the object
print(EventsEntityInputType.to_json())

# convert the object into a dict
events_entity_input_type_dict = events_entity_input_type_instance.to_dict()
# create an instance of EventsEntityInputType from a dict
events_entity_input_type_from_dict = EventsEntityInputType.from_dict(events_entity_input_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


