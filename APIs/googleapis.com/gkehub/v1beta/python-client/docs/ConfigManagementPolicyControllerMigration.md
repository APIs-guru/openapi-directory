# ConfigManagementPolicyControllerMigration

State for the migration of PolicyController from ACM -> PoCo Hub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copy_time** | **str** | Last time this membership spec was copied to PoCo feature. | [optional] 
**stage** | **str** | Stage of the migration. | [optional] 

## Example

```python
from openapi_client.models.config_management_policy_controller_migration import ConfigManagementPolicyControllerMigration

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementPolicyControllerMigration from a JSON string
config_management_policy_controller_migration_instance = ConfigManagementPolicyControllerMigration.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementPolicyControllerMigration.to_json())

# convert the object into a dict
config_management_policy_controller_migration_dict = config_management_policy_controller_migration_instance.to_dict()
# create an instance of ConfigManagementPolicyControllerMigration from a dict
config_management_policy_controller_migration_from_dict = ConfigManagementPolicyControllerMigration.from_dict(config_management_policy_controller_migration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


