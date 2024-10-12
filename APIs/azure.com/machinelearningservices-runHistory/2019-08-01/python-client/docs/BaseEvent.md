# BaseEvent

Base event is the envelope used to post event data to the Event controller

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** |  | [optional] 
**name** | **str** |  | [optional] 
**timestamp** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.base_event import BaseEvent

# TODO update the JSON string below
json = "{}"
# create an instance of BaseEvent from a JSON string
base_event_instance = BaseEvent.from_json(json)
# print the JSON string representation of the object
print(BaseEvent.to_json())

# convert the object into a dict
base_event_dict = base_event_instance.to_dict()
# create an instance of BaseEvent from a dict
base_event_from_dict = BaseEvent.from_dict(base_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


