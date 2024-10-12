# EventPartial

Event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** |  | [optional] [readonly] 
**payload** | **object** |  | [optional] 
**serial** | **int** |  | [optional] 
**timestamp** | **datetime** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.event_partial import EventPartial

# TODO update the JSON string below
json = "{}"
# create an instance of EventPartial from a JSON string
event_partial_instance = EventPartial.from_json(json)
# print the JSON string representation of the object
print(EventPartial.to_json())

# convert the object into a dict
event_partial_dict = event_partial_instance.to_dict()
# create an instance of EventPartial from a dict
event_partial_from_dict = EventPartial.from_dict(event_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


