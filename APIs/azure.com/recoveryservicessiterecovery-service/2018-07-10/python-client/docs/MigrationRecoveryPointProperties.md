# MigrationRecoveryPointProperties

Migration item recovery point properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovery_point_time** | **datetime** | The recovery point time. | [optional] [readonly] 
**recovery_point_type** | **str** | The recovery point type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.migration_recovery_point_properties import MigrationRecoveryPointProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationRecoveryPointProperties from a JSON string
migration_recovery_point_properties_instance = MigrationRecoveryPointProperties.from_json(json)
# print the JSON string representation of the object
print(MigrationRecoveryPointProperties.to_json())

# convert the object into a dict
migration_recovery_point_properties_dict = migration_recovery_point_properties_instance.to_dict()
# create an instance of MigrationRecoveryPointProperties from a dict
migration_recovery_point_properties_from_dict = MigrationRecoveryPointProperties.from_dict(migration_recovery_point_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


