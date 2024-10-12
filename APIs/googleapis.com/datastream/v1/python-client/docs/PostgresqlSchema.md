# PostgresqlSchema

PostgreSQL schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**postgresql_tables** | [**List[PostgresqlTable]**](PostgresqlTable.md) | Tables in the schema. | [optional] 
**var_schema** | **str** | Schema name. | [optional] 

## Example

```python
from openapi_client.models.postgresql_schema import PostgresqlSchema

# TODO update the JSON string below
json = "{}"
# create an instance of PostgresqlSchema from a JSON string
postgresql_schema_instance = PostgresqlSchema.from_json(json)
# print the JSON string representation of the object
print(PostgresqlSchema.to_json())

# convert the object into a dict
postgresql_schema_dict = postgresql_schema_instance.to_dict()
# create an instance of PostgresqlSchema from a dict
postgresql_schema_from_dict = PostgresqlSchema.from_dict(postgresql_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


