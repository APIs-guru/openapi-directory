# Event

Represents an BaseEvent that happened in Stream Chat

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automoderation** | **bool** | Only applicable to &#x60;message.flagged&#x60; BaseEvent. | [optional] 
**automoderation_scores** | [**ModerationResponse**](ModerationResponse.md) |  | [optional] 
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**channel_id** | **str** |  | [optional] 
**channel_type** | **str** |  | [optional] 
**cid** | **str** | Channel CID (&lt;type&gt;:&lt;id&gt;) | [optional] 
**connection_id** | **str** | Only applicable to &#x60;health.check&#x60; BaseEvent | [optional] 
**created_at** | **datetime** | Date/time of creation | 
**created_by** | [**UserObject**](UserObject.md) |  | [optional] 
**me** | [**OwnUser**](OwnUser.md) |  | [optional] 
**member** | [**ChannelMember**](ChannelMember.md) |  | [optional] 
**message** | [**Message**](Message.md) |  | [optional] 
**parent_id** | **str** | ID of thread. Used in typing events | [optional] 
**reaction** | [**Reaction**](Reaction.md) |  | [optional] 
**reason** | **str** | Ban reason. Only applicable to &#x60;user.banned&#x60; BaseEvent | [optional] 
**team** | **str** |  | [optional] 
**type** | **str** | Event type. To use custom BaseEvent types see Custom Events documentation | 
**user** | [**UserObject**](UserObject.md) |  | [optional] 
**user_id** | **str** |  | [optional] 
**watcher_count** | **int** | Number of watchers who received this BaseEvent | [optional] 

## Example

```python
from openapi_client.models.event import Event

# TODO update the JSON string below
json = "{}"
# create an instance of Event from a JSON string
event_instance = Event.from_json(json)
# print the JSON string representation of the object
print(Event.to_json())

# convert the object into a dict
event_dict = event_instance.to_dict()
# create an instance of Event from a dict
event_from_dict = Event.from_dict(event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


