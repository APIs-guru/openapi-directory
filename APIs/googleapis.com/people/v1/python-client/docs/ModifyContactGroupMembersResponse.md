# ModifyContactGroupMembersResponse

The response to a modify contact group members request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_not_remove_last_contact_group_resource_names** | **List[str]** | The contact people resource names that cannot be removed from their last contact group. | [optional] 
**not_found_resource_names** | **List[str]** | The contact people resource names that were not found. | [optional] 

## Example

```python
from openapi_client.models.modify_contact_group_members_response import ModifyContactGroupMembersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyContactGroupMembersResponse from a JSON string
modify_contact_group_members_response_instance = ModifyContactGroupMembersResponse.from_json(json)
# print the JSON string representation of the object
print(ModifyContactGroupMembersResponse.to_json())

# convert the object into a dict
modify_contact_group_members_response_dict = modify_contact_group_members_response_instance.to_dict()
# create an instance of ModifyContactGroupMembersResponse from a dict
modify_contact_group_members_response_from_dict = ModifyContactGroupMembersResponse.from_dict(modify_contact_group_members_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


