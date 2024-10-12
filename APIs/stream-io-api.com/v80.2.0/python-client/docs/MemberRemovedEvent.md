# MemberRemovedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**member** | [**ChannelMember**](ChannelMember.md) |  | [optional] 
**type** | **str** |  | [default to 'member.removed']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.member_removed_event import MemberRemovedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of MemberRemovedEvent from a JSON string
member_removed_event_instance = MemberRemovedEvent.from_json(json)
# print the JSON string representation of the object
print(MemberRemovedEvent.to_json())

# convert the object into a dict
member_removed_event_dict = member_removed_event_instance.to_dict()
# create an instance of MemberRemovedEvent from a dict
member_removed_event_from_dict = MemberRemovedEvent.from_dict(member_removed_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


