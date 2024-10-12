# DpcMigrationInfo

Information related to whether this device was migrated from being managed by another Device Policy Controller (DPC).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_data** | **str** | Output only. If this device was migrated from another DPC, the additionalData field of the migration token is populated here. | [optional] [readonly] 
**previous_dpc** | **str** | Output only. If this device was migrated from another DPC, this is its package name. Not populated otherwise. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dpc_migration_info import DpcMigrationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DpcMigrationInfo from a JSON string
dpc_migration_info_instance = DpcMigrationInfo.from_json(json)
# print the JSON string representation of the object
print(DpcMigrationInfo.to_json())

# convert the object into a dict
dpc_migration_info_dict = dpc_migration_info_instance.to_dict()
# create an instance of DpcMigrationInfo from a dict
dpc_migration_info_from_dict = DpcMigrationInfo.from_dict(dpc_migration_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


