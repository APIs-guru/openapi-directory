# ModifyMembershipRolesRequest

The request message for MembershipsService.ModifyMembershipRoles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_roles** | [**List[MembershipRole]**](MembershipRole.md) | The &#x60;MembershipRole&#x60;s to be added. Adding or removing roles in the same request as updating roles is not supported. Must not be set if &#x60;update_roles_params&#x60; is set. | [optional] 
**remove_roles** | **List[str]** | The &#x60;name&#x60;s of the &#x60;MembershipRole&#x60;s to be removed. Adding or removing roles in the same request as updating roles is not supported. It is not possible to remove the &#x60;MEMBER&#x60; &#x60;MembershipRole&#x60;. If you wish to delete a &#x60;Membership&#x60;, call MembershipsService.DeleteMembership instead. Must not contain &#x60;MEMBER&#x60;. Must not be set if &#x60;update_roles_params&#x60; is set. | [optional] 
**update_roles_params** | [**List[UpdateMembershipRolesParams]**](UpdateMembershipRolesParams.md) | The &#x60;MembershipRole&#x60;s to be updated. Updating roles in the same request as adding or removing roles is not supported. Must not be set if either &#x60;add_roles&#x60; or &#x60;remove_roles&#x60; is set. | [optional] 

## Example

```python
from openapi_client.models.modify_membership_roles_request import ModifyMembershipRolesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyMembershipRolesRequest from a JSON string
modify_membership_roles_request_instance = ModifyMembershipRolesRequest.from_json(json)
# print the JSON string representation of the object
print(ModifyMembershipRolesRequest.to_json())

# convert the object into a dict
modify_membership_roles_request_dict = modify_membership_roles_request_instance.to_dict()
# create an instance of ModifyMembershipRolesRequest from a dict
modify_membership_roles_request_from_dict = ModifyMembershipRolesRequest.from_dict(modify_membership_roles_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


