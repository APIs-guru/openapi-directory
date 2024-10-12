# MigrationInsight

An insight about potential migrations for an asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_engine_target** | [**ComputeEngineMigrationTarget**](ComputeEngineMigrationTarget.md) |  | [optional] 
**fit** | [**FitDescriptor**](FitDescriptor.md) |  | [optional] 

## Example

```python
from openapi_client.models.migration_insight import MigrationInsight

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationInsight from a JSON string
migration_insight_instance = MigrationInsight.from_json(json)
# print the JSON string representation of the object
print(MigrationInsight.to_json())

# convert the object into a dict
migration_insight_dict = migration_insight_instance.to_dict()
# create an instance of MigrationInsight from a dict
migration_insight_from_dict = MigrationInsight.from_dict(migration_insight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


