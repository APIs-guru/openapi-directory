# ModifyMembershipRolesResponse

The response message for MembershipsService.ModifyMembershipRoles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**membership** | [**Membership**](Membership.md) |  | [optional] 

## Example

```python
from openapi_client.models.modify_membership_roles_response import ModifyMembershipRolesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyMembershipRolesResponse from a JSON string
modify_membership_roles_response_instance = ModifyMembershipRolesResponse.from_json(json)
# print the JSON string representation of the object
print(ModifyMembershipRolesResponse.to_json())

# convert the object into a dict
modify_membership_roles_response_dict = modify_membership_roles_response_instance.to_dict()
# create an instance of ModifyMembershipRolesResponse from a dict
modify_membership_roles_response_from_dict = ModifyMembershipRolesResponse.from_dict(modify_membership_roles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


