# EventRequest

Represents an BaseEvent that happened in Stream Chat

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automoderation** | **bool** | Only applicable to &#x60;message.flagged&#x60; BaseEvent. | [optional] 
**automoderation_scores** | [**ModerationResponseRequest**](ModerationResponseRequest.md) |  | [optional] 
**channel** | [**ChannelResponseRequest**](ChannelResponseRequest.md) |  | [optional] 
**channel_id** | **str** |  | [optional] 
**channel_type** | **str** |  | [optional] 
**cid** | **str** | Channel CID (&lt;type&gt;:&lt;id&gt;) | [optional] 
**connection_id** | **str** | Only applicable to &#x60;health.check&#x60; BaseEvent | [optional] 
**created_at** | **datetime** | Date/time of creation | [optional] 
**created_by** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**me** | [**OwnUserRequest**](OwnUserRequest.md) |  | [optional] 
**member** | [**ChannelMemberRequest**](ChannelMemberRequest.md) |  | [optional] 
**message** | [**MessageRequest1**](MessageRequest1.md) |  | [optional] 
**parent_id** | **str** | ID of thread. Used in typing events | [optional] 
**reaction** | [**ReactionRequest**](ReactionRequest.md) |  | [optional] 
**reason** | **str** | Ban reason. Only applicable to &#x60;user.banned&#x60; BaseEvent | [optional] 
**team** | **str** |  | [optional] 
**type** | **str** | Event type. To use custom BaseEvent types see Custom Events documentation | 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 
**watcher_count** | **int** | Number of watchers who received this BaseEvent | [optional] 

## Example

```python
from openapi_client.models.event_request import EventRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EventRequest from a JSON string
event_request_instance = EventRequest.from_json(json)
# print the JSON string representation of the object
print(EventRequest.to_json())

# convert the object into a dict
event_request_dict = event_request_instance.to_dict()
# create an instance of EventRequest from a dict
event_request_from_dict = EventRequest.from_dict(event_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


