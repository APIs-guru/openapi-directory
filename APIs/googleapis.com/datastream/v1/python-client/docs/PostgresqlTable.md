# PostgresqlTable

PostgreSQL table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**postgresql_columns** | [**List[PostgresqlColumn]**](PostgresqlColumn.md) | PostgreSQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything. | [optional] 
**table** | **str** | Table name. | [optional] 

## Example

```python
from openapi_client.models.postgresql_table import PostgresqlTable

# TODO update the JSON string below
json = "{}"
# create an instance of PostgresqlTable from a JSON string
postgresql_table_instance = PostgresqlTable.from_json(json)
# print the JSON string representation of the object
print(PostgresqlTable.to_json())

# convert the object into a dict
postgresql_table_dict = postgresql_table_instance.to_dict()
# create an instance of PostgresqlTable from a dict
postgresql_table_from_dict = PostgresqlTable.from_dict(postgresql_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


