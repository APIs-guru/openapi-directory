# TypingStartEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**parent_id** | **str** |  | [optional] 
**type** | **str** |  | [default to 'typing.start']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.typing_start_event import TypingStartEvent

# TODO update the JSON string below
json = "{}"
# create an instance of TypingStartEvent from a JSON string
typing_start_event_instance = TypingStartEvent.from_json(json)
# print the JSON string representation of the object
print(TypingStartEvent.to_json())

# convert the object into a dict
typing_start_event_dict = typing_start_event_instance.to_dict()
# create an instance of TypingStartEvent from a dict
typing_start_event_from_dict = TypingStartEvent.from_dict(typing_start_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


