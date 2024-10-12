# ComputeEngineMigrationTarget

Compute engine migration target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shape** | [**ComputeEngineShapeDescriptor**](ComputeEngineShapeDescriptor.md) |  | [optional] 

## Example

```python
from openapi_client.models.compute_engine_migration_target import ComputeEngineMigrationTarget

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeEngineMigrationTarget from a JSON string
compute_engine_migration_target_instance = ComputeEngineMigrationTarget.from_json(json)
# print the JSON string representation of the object
print(ComputeEngineMigrationTarget.to_json())

# convert the object into a dict
compute_engine_migration_target_dict = compute_engine_migration_target_instance.to_dict()
# create an instance of ComputeEngineMigrationTarget from a dict
compute_engine_migration_target_from_dict = ComputeEngineMigrationTarget.from_dict(compute_engine_migration_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


