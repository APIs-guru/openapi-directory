# MigrationRecoveryPointCollection

Collection of migration recovery points.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The value of next link. | [optional] 
**value** | [**List[MigrationRecoveryPoint]**](MigrationRecoveryPoint.md) | The migration recovery point details. | [optional] 

## Example

```python
from openapi_client.models.migration_recovery_point_collection import MigrationRecoveryPointCollection

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationRecoveryPointCollection from a JSON string
migration_recovery_point_collection_instance = MigrationRecoveryPointCollection.from_json(json)
# print the JSON string representation of the object
print(MigrationRecoveryPointCollection.to_json())

# convert the object into a dict
migration_recovery_point_collection_dict = migration_recovery_point_collection_instance.to_dict()
# create an instance of MigrationRecoveryPointCollection from a dict
migration_recovery_point_collection_from_dict = MigrationRecoveryPointCollection.from_dict(migration_recovery_point_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


