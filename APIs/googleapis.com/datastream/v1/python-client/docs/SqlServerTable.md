# SqlServerTable

SQLServer table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[SqlServerColumn]**](SqlServerColumn.md) | SQLServer columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything. | [optional] 
**table** | **str** | Table name. | [optional] 

## Example

```python
from openapi_client.models.sql_server_table import SqlServerTable

# TODO update the JSON string below
json = "{}"
# create an instance of SqlServerTable from a JSON string
sql_server_table_instance = SqlServerTable.from_json(json)
# print the JSON string representation of the object
print(SqlServerTable.to_json())

# convert the object into a dict
sql_server_table_dict = sql_server_table_instance.to_dict()
# create an instance of SqlServerTable from a dict
sql_server_table_from_dict = SqlServerTable.from_dict(sql_server_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


