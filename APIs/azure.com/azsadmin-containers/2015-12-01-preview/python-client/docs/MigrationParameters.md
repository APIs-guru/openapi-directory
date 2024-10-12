# MigrationParameters

Parameters of container migration job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_name** | **str** | The name of the container to be migrated. | 
**destination_share_unc_path** | **str** | The UNC path of the destination share for migration. | 
**storage_account_name** | **str** | The name of the storage account where the container locates. | 

## Example

```python
from openapi_client.models.migration_parameters import MigrationParameters

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationParameters from a JSON string
migration_parameters_instance = MigrationParameters.from_json(json)
# print the JSON string representation of the object
print(MigrationParameters.to_json())

# convert the object into a dict
migration_parameters_dict = migration_parameters_instance.to_dict()
# create an instance of MigrationParameters from a dict
migration_parameters_from_dict = MigrationParameters.from_dict(migration_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


