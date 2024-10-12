# UpdateMembershipRolesParams

The details of an update to a `MembershipRole`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_mask** | **str** | The fully-qualified names of fields to update. May only contain the field &#x60;expiry_detail.expire_time&#x60;. | [optional] 
**membership_role** | [**MembershipRole**](MembershipRole.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_membership_roles_params import UpdateMembershipRolesParams

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMembershipRolesParams from a JSON string
update_membership_roles_params_instance = UpdateMembershipRolesParams.from_json(json)
# print the JSON string representation of the object
print(UpdateMembershipRolesParams.to_json())

# convert the object into a dict
update_membership_roles_params_dict = update_membership_roles_params_instance.to_dict()
# create an instance of UpdateMembershipRolesParams from a dict
update_membership_roles_params_from_dict = UpdateMembershipRolesParams.from_dict(update_membership_roles_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


