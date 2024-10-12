# UpdateAMemberSRoleInTheOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role_public_id** | **str** | The new role public ID to update the user to. | [optional] 

## Example

```python
from openapi_client.models.update_a_member_s_role_in_the_organization_request import UpdateAMemberSRoleInTheOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAMemberSRoleInTheOrganizationRequest from a JSON string
update_a_member_s_role_in_the_organization_request_instance = UpdateAMemberSRoleInTheOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateAMemberSRoleInTheOrganizationRequest.to_json())

# convert the object into a dict
update_a_member_s_role_in_the_organization_request_dict = update_a_member_s_role_in_the_organization_request_instance.to_dict()
# create an instance of UpdateAMemberSRoleInTheOrganizationRequest from a dict
update_a_member_s_role_in_the_organization_request_from_dict = UpdateAMemberSRoleInTheOrganizationRequest.from_dict(update_a_member_s_role_in_the_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


