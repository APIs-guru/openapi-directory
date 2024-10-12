# TypingStopEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**parent_id** | **str** |  | [optional] 
**type** | **str** |  | [default to 'typing.stop']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.typing_stop_event import TypingStopEvent

# TODO update the JSON string below
json = "{}"
# create an instance of TypingStopEvent from a JSON string
typing_stop_event_instance = TypingStopEvent.from_json(json)
# print the JSON string representation of the object
print(TypingStopEvent.to_json())

# convert the object into a dict
typing_stop_event_dict = typing_stop_event_instance.to_dict()
# create an instance of TypingStopEvent from a dict
typing_stop_event_from_dict = TypingStopEvent.from_dict(typing_stop_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


