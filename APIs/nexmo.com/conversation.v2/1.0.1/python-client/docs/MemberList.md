# MemberList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**MemberListLinks**](MemberListLinks.md) |  | [optional] 
**display_name** | **str** | The display name of the User | [optional] 
**id** | **str** | Member ID | [optional] 
**name** | **str** | The name of the User | [optional] 
**state** | **str** | The state that the member is in for this conversation | [optional] 
**user_id** | **str** | The ID of the User | [optional] 

## Example

```python
from openapi_client.models.member_list import MemberList

# TODO update the JSON string below
json = "{}"
# create an instance of MemberList from a JSON string
member_list_instance = MemberList.from_json(json)
# print the JSON string representation of the object
print(MemberList.to_json())

# convert the object into a dict
member_list_dict = member_list_instance.to_dict()
# create an instance of MemberList from a dict
member_list_from_dict = MemberList.from_dict(member_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


