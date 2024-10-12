# SqlDWTableProperties

Properties of the SQL DW table data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_set_id** | **str** | Unique id for identifying a data set resource | [optional] [readonly] 
**data_warehouse_name** | **str** | DataWarehouse name of the source data set | 
**schema_name** | **str** | Schema of the table. Default value is dbo. | 
**sql_server_resource_id** | **str** | Resource id of SQL server | 
**table_name** | **str** | SQL DW table name. | 

## Example

```python
from openapi_client.models.sql_dw_table_properties import SqlDWTableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SqlDWTableProperties from a JSON string
sql_dw_table_properties_instance = SqlDWTableProperties.from_json(json)
# print the JSON string representation of the object
print(SqlDWTableProperties.to_json())

# convert the object into a dict
sql_dw_table_properties_dict = sql_dw_table_properties_instance.to_dict()
# create an instance of SqlDWTableProperties from a dict
sql_dw_table_properties_from_dict = SqlDWTableProperties.from_dict(sql_dw_table_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


