# CheckMigrationPermissionResponse

CheckMigrationPermissionResponse is the response message for CheckMigrationPermission method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**onprem_domains** | [**List[OnPremDomainSIDDetails]**](OnPremDomainSIDDetails.md) | The state of SID filtering of all the domains which has trust established. | [optional] 
**state** | **str** | The state of DomainMigration. | [optional] 

## Example

```python
from openapi_client.models.check_migration_permission_response import CheckMigrationPermissionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckMigrationPermissionResponse from a JSON string
check_migration_permission_response_instance = CheckMigrationPermissionResponse.from_json(json)
# print the JSON string representation of the object
print(CheckMigrationPermissionResponse.to_json())

# convert the object into a dict
check_migration_permission_response_dict = check_migration_permission_response_instance.to_dict()
# create an instance of CheckMigrationPermissionResponse from a dict
check_migration_permission_response_from_dict = CheckMigrationPermissionResponse.from_dict(check_migration_permission_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


