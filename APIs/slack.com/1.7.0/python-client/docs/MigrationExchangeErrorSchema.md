# MigrationExchangeErrorSchema

Schema for error response from migration.exchange method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.migration_exchange_error_schema import MigrationExchangeErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationExchangeErrorSchema from a JSON string
migration_exchange_error_schema_instance = MigrationExchangeErrorSchema.from_json(json)
# print the JSON string representation of the object
print(MigrationExchangeErrorSchema.to_json())

# convert the object into a dict
migration_exchange_error_schema_dict = migration_exchange_error_schema_instance.to_dict()
# create an instance of MigrationExchangeErrorSchema from a dict
migration_exchange_error_schema_from_dict = MigrationExchangeErrorSchema.from_dict(migration_exchange_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


