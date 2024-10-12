# SqlDBTableProperties

Properties of the SQL DB table data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_set_id** | **str** | Unique id for identifying a data set resource | [optional] [readonly] 
**database_name** | **str** | Database name of the source data set | 
**schema_name** | **str** | Schema of the table. Default value is dbo. | 
**sql_server_resource_id** | **str** | Resource id of SQL server | 
**table_name** | **str** | SQL DB table name. | 

## Example

```python
from openapi_client.models.sql_db_table_properties import SqlDBTableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SqlDBTableProperties from a JSON string
sql_db_table_properties_instance = SqlDBTableProperties.from_json(json)
# print the JSON string representation of the object
print(SqlDBTableProperties.to_json())

# convert the object into a dict
sql_db_table_properties_dict = sql_db_table_properties_instance.to_dict()
# create an instance of SqlDBTableProperties from a dict
sql_db_table_properties_from_dict = SqlDBTableProperties.from_dict(sql_db_table_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


