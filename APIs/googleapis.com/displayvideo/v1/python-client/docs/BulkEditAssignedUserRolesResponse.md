# BulkEditAssignedUserRolesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_assigned_user_roles** | [**List[AssignedUserRole]**](AssignedUserRole.md) | The list of assigned user roles that have been successfully created. This list will be absent if empty. | [optional] 

## Example

```python
from openapi_client.models.bulk_edit_assigned_user_roles_response import BulkEditAssignedUserRolesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkEditAssignedUserRolesResponse from a JSON string
bulk_edit_assigned_user_roles_response_instance = BulkEditAssignedUserRolesResponse.from_json(json)
# print the JSON string representation of the object
print(BulkEditAssignedUserRolesResponse.to_json())

# convert the object into a dict
bulk_edit_assigned_user_roles_response_dict = bulk_edit_assigned_user_roles_response_instance.to_dict()
# create an instance of BulkEditAssignedUserRolesResponse from a dict
bulk_edit_assigned_user_roles_response_from_dict = BulkEditAssignedUserRolesResponse.from_dict(bulk_edit_assigned_user_roles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


