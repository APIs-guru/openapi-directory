# Member


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**MemberListLinks**](MemberListLinks.md) |  | [optional] 
**display_name** | **str** | The display name of the User | [optional] 
**id** | **str** | Member ID | [optional] 
**name** | **str** | The name of the User | [optional] 
**state** | **str** | The state that the member is in for this conversation | [optional] 
**user_id** | **str** | The ID of the User | [optional] 
**channel** | [**MemberAllOfChannel**](MemberAllOfChannel.md) |  | [optional] 
**initiator** | [**MemberAllOfInitiator**](MemberAllOfInitiator.md) |  | [optional] 
**media** | [**MemberAllOfMedia**](MemberAllOfMedia.md) |  | [optional] 
**timestamp** | [**MemberAllOfTimestamp**](MemberAllOfTimestamp.md) |  | [optional] 

## Example

```python
from openapi_client.models.member import Member

# TODO update the JSON string below
json = "{}"
# create an instance of Member from a JSON string
member_instance = Member.from_json(json)
# print the JSON string representation of the object
print(Member.to_json())

# convert the object into a dict
member_dict = member_instance.to_dict()
# create an instance of Member from a dict
member_from_dict = Member.from_dict(member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


