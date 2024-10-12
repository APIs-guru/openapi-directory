# PostgresqlColumn

PostgreSQL Column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **str** | Column name. | [optional] 
**data_type** | **str** | The PostgreSQL data type. | [optional] 
**length** | **int** | Column length. | [optional] 
**nullable** | **bool** | Whether or not the column can accept a null value. | [optional] 
**ordinal_position** | **int** | The ordinal position of the column in the table. | [optional] 
**precision** | **int** | Column precision. | [optional] 
**primary_key** | **bool** | Whether or not the column represents a primary key. | [optional] 
**scale** | **int** | Column scale. | [optional] 

## Example

```python
from openapi_client.models.postgresql_column import PostgresqlColumn

# TODO update the JSON string below
json = "{}"
# create an instance of PostgresqlColumn from a JSON string
postgresql_column_instance = PostgresqlColumn.from_json(json)
# print the JSON string representation of the object
print(PostgresqlColumn.to_json())

# convert the object into a dict
postgresql_column_dict = postgresql_column_instance.to_dict()
# create an instance of PostgresqlColumn from a dict
postgresql_column_from_dict = PostgresqlColumn.from_dict(postgresql_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


