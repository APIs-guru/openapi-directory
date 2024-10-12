# AddUserGroupMember


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **str** | UUID of user to add to this group. | 

## Example

```python
from openapi_client.models.add_user_group_member import AddUserGroupMember

# TODO update the JSON string below
json = "{}"
# create an instance of AddUserGroupMember from a JSON string
add_user_group_member_instance = AddUserGroupMember.from_json(json)
# print the JSON string representation of the object
print(AddUserGroupMember.to_json())

# convert the object into a dict
add_user_group_member_dict = add_user_group_member_instance.to_dict()
# create an instance of AddUserGroupMember from a dict
add_user_group_member_from_dict = AddUserGroupMember.from_dict(add_user_group_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


