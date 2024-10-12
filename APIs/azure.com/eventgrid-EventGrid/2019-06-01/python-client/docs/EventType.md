# EventType

Event Type for a subject under a topic

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EventTypeProperties**](EventTypeProperties.md) |  | [optional] 
**id** | **str** | Fully qualified identifier of the resource. | [optional] [readonly] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**type** | **str** | Type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.event_type import EventType

# TODO update the JSON string below
json = "{}"
# create an instance of EventType from a JSON string
event_type_instance = EventType.from_json(json)
# print the JSON string representation of the object
print(EventType.to_json())

# convert the object into a dict
event_type_dict = event_type_instance.to_dict()
# create an instance of EventType from a dict
event_type_from_dict = EventType.from_dict(event_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


