# MemberLeftEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**EventLinks**](EventLinks.md) |  | [optional] 
**var_from** | **str** | The member ID of the sender | [optional] 
**id** | **int** | The ID of the event | [optional] 
**timestamp** | **str** | The time that the event happened | [optional] 
**type** | **str** | The event type (&#x60;member:left&#x60;) | [optional] 
**body** | [**Member**](Member.md) |  | [optional] 

## Example

```python
from openapi_client.models.member_left_event import MemberLeftEvent

# TODO update the JSON string below
json = "{}"
# create an instance of MemberLeftEvent from a JSON string
member_left_event_instance = MemberLeftEvent.from_json(json)
# print the JSON string representation of the object
print(MemberLeftEvent.to_json())

# convert the object into a dict
member_left_event_dict = member_left_event_instance.to_dict()
# create an instance of MemberLeftEvent from a dict
member_left_event_from_dict = MemberLeftEvent.from_dict(member_left_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


