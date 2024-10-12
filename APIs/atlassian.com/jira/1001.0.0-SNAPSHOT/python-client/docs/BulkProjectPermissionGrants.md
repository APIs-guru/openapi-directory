# BulkProjectPermissionGrants

List of project permissions and the projects and issues those permissions grant access to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issues** | **List[int]** | IDs of the issues the user has the permission for. | 
**permission** | **str** | A project permission, | 
**projects** | **List[int]** | IDs of the projects the user has the permission for. | 

## Example

```python
from openapi_client.models.bulk_project_permission_grants import BulkProjectPermissionGrants

# TODO update the JSON string below
json = "{}"
# create an instance of BulkProjectPermissionGrants from a JSON string
bulk_project_permission_grants_instance = BulkProjectPermissionGrants.from_json(json)
# print the JSON string representation of the object
print(BulkProjectPermissionGrants.to_json())

# convert the object into a dict
bulk_project_permission_grants_dict = bulk_project_permission_grants_instance.to_dict()
# create an instance of BulkProjectPermissionGrants from a dict
bulk_project_permission_grants_from_dict = BulkProjectPermissionGrants.from_dict(bulk_project_permission_grants_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


