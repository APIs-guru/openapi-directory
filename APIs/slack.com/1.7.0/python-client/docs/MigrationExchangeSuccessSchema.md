# MigrationExchangeSuccessSchema

Schema for successful response from migration.exchange method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enterprise_id** | **str** |  | 
**invalid_user_ids** | **List[str]** |  | [optional] 
**ok** | **bool** |  | 
**team_id** | **str** |  | 
**user_id_map** | **Dict[str, object]** |  | [optional] 

## Example

```python
from openapi_client.models.migration_exchange_success_schema import MigrationExchangeSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationExchangeSuccessSchema from a JSON string
migration_exchange_success_schema_instance = MigrationExchangeSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(MigrationExchangeSuccessSchema.to_json())

# convert the object into a dict
migration_exchange_success_schema_dict = migration_exchange_success_schema_instance.to_dict()
# create an instance of MigrationExchangeSuccessSchema from a dict
migration_exchange_success_schema_from_dict = MigrationExchangeSuccessSchema.from_dict(migration_exchange_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


