# SqlServerColumn

SQLServer Column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **str** | Column name. | [optional] 
**data_type** | **str** | The SQLServer data type. | [optional] 
**length** | **int** | Column length. | [optional] 
**nullable** | **bool** | Whether or not the column can accept a null value. | [optional] 
**ordinal_position** | **int** | The ordinal position of the column in the table. | [optional] 
**precision** | **int** | Column precision. | [optional] 
**primary_key** | **bool** | Whether or not the column represents a primary key. | [optional] 
**scale** | **int** | Column scale. | [optional] 

## Example

```python
from openapi_client.models.sql_server_column import SqlServerColumn

# TODO update the JSON string below
json = "{}"
# create an instance of SqlServerColumn from a JSON string
sql_server_column_instance = SqlServerColumn.from_json(json)
# print the JSON string representation of the object
print(SqlServerColumn.to_json())

# convert the object into a dict
sql_server_column_dict = sql_server_column_instance.to_dict()
# create an instance of SqlServerColumn from a dict
sql_server_column_from_dict = SqlServerColumn.from_dict(sql_server_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


