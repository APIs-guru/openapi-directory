# MemberAddedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**member** | [**ChannelMember**](ChannelMember.md) |  | [optional] 
**team** | **str** |  | [optional] 
**type** | **str** |  | [default to 'member.added']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.member_added_event import MemberAddedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of MemberAddedEvent from a JSON string
member_added_event_instance = MemberAddedEvent.from_json(json)
# print the JSON string representation of the object
print(MemberAddedEvent.to_json())

# convert the object into a dict
member_added_event_dict = member_added_event_instance.to_dict()
# create an instance of MemberAddedEvent from a dict
member_added_event_from_dict = MemberAddedEvent.from_dict(member_added_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


