# MemberUpdatedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**member** | [**ChannelMember**](ChannelMember.md) |  | [optional] 
**team** | **str** |  | [optional] 
**type** | **str** |  | [default to 'member.updated']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.member_updated_event import MemberUpdatedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of MemberUpdatedEvent from a JSON string
member_updated_event_instance = MemberUpdatedEvent.from_json(json)
# print the JSON string representation of the object
print(MemberUpdatedEvent.to_json())

# convert the object into a dict
member_updated_event_dict = member_updated_event_instance.to_dict()
# create an instance of MemberUpdatedEvent from a dict
member_updated_event_from_dict = MemberUpdatedEvent.from_dict(member_updated_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


