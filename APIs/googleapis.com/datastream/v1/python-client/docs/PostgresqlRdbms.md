# PostgresqlRdbms

PostgreSQL database structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**postgresql_schemas** | [**List[PostgresqlSchema]**](PostgresqlSchema.md) | PostgreSQL schemas in the database server. | [optional] 

## Example

```python
from openapi_client.models.postgresql_rdbms import PostgresqlRdbms

# TODO update the JSON string below
json = "{}"
# create an instance of PostgresqlRdbms from a JSON string
postgresql_rdbms_instance = PostgresqlRdbms.from_json(json)
# print the JSON string representation of the object
print(PostgresqlRdbms.to_json())

# convert the object into a dict
postgresql_rdbms_dict = postgresql_rdbms_instance.to_dict()
# create an instance of PostgresqlRdbms from a dict
postgresql_rdbms_from_dict = PostgresqlRdbms.from_dict(postgresql_rdbms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


