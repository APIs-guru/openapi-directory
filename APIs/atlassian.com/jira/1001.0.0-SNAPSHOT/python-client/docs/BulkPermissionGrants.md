# BulkPermissionGrants

Details of global and project permissions granted to the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**global_permissions** | **List[str]** | List of permissions granted to the user. | 
**project_permissions** | [**List[BulkProjectPermissionGrants]**](BulkProjectPermissionGrants.md) | List of project permissions and the projects and issues those permissions provide access to. | 

## Example

```python
from openapi_client.models.bulk_permission_grants import BulkPermissionGrants

# TODO update the JSON string below
json = "{}"
# create an instance of BulkPermissionGrants from a JSON string
bulk_permission_grants_instance = BulkPermissionGrants.from_json(json)
# print the JSON string representation of the object
print(BulkPermissionGrants.to_json())

# convert the object into a dict
bulk_permission_grants_dict = bulk_permission_grants_instance.to_dict()
# create an instance of BulkPermissionGrants from a dict
bulk_permission_grants_from_dict = BulkPermissionGrants.from_dict(bulk_permission_grants_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


