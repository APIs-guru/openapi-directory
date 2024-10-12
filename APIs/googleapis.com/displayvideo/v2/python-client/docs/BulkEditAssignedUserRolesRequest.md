# BulkEditAssignedUserRolesRequest

Request message for BulkEditAssignedUserRoles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_assigned_user_roles** | [**List[AssignedUserRole]**](AssignedUserRole.md) | The assigned user roles to create in batch, specified as a list of AssignedUserRoles. | [optional] 
**deleted_assigned_user_roles** | **List[str]** | The assigned user roles to delete in batch, specified as a list of assigned_user_role_ids. The format of assigned_user_role_id is &#x60;entityType-entityid&#x60;, for example &#x60;partner-123&#x60;. | [optional] 

## Example

```python
from openapi_client.models.bulk_edit_assigned_user_roles_request import BulkEditAssignedUserRolesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkEditAssignedUserRolesRequest from a JSON string
bulk_edit_assigned_user_roles_request_instance = BulkEditAssignedUserRolesRequest.from_json(json)
# print the JSON string representation of the object
print(BulkEditAssignedUserRolesRequest.to_json())

# convert the object into a dict
bulk_edit_assigned_user_roles_request_dict = bulk_edit_assigned_user_roles_request_instance.to_dict()
# create an instance of BulkEditAssignedUserRolesRequest from a dict
bulk_edit_assigned_user_roles_request_from_dict = BulkEditAssignedUserRolesRequest.from_dict(bulk_edit_assigned_user_roles_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


