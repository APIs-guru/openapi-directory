# MemberInvitedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**EventLinks**](EventLinks.md) |  | [optional] 
**var_from** | **str** | The member ID of the sender | [optional] 
**id** | **int** | The ID of the event | [optional] 
**timestamp** | **str** | The time that the event happened | [optional] 
**type** | **str** | The event type (&#x60;member:invited&#x60;) | [optional] 
**body** | [**Member**](Member.md) |  | [optional] 

## Example

```python
from openapi_client.models.member_invited_event import MemberInvitedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of MemberInvitedEvent from a JSON string
member_invited_event_instance = MemberInvitedEvent.from_json(json)
# print the JSON string representation of the object
print(MemberInvitedEvent.to_json())

# convert the object into a dict
member_invited_event_dict = member_invited_event_instance.to_dict()
# create an instance of MemberInvitedEvent from a dict
member_invited_event_from_dict = MemberInvitedEvent.from_dict(member_invited_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


