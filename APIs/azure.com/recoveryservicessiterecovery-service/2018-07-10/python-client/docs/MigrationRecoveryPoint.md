# MigrationRecoveryPoint

Recovery point for a migration item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MigrationRecoveryPointProperties**](MigrationRecoveryPointProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource Name | [optional] [readonly] 
**type** | **str** | Resource Type | [optional] [readonly] 

## Example

```python
from openapi_client.models.migration_recovery_point import MigrationRecoveryPoint

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationRecoveryPoint from a JSON string
migration_recovery_point_instance = MigrationRecoveryPoint.from_json(json)
# print the JSON string representation of the object
print(MigrationRecoveryPoint.to_json())

# convert the object into a dict
migration_recovery_point_dict = migration_recovery_point_instance.to_dict()
# create an instance of MigrationRecoveryPoint from a dict
migration_recovery_point_from_dict = MigrationRecoveryPoint.from_dict(migration_recovery_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


