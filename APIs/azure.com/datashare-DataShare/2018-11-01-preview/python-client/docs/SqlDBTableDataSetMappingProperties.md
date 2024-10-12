# SqlDBTableDataSetMappingProperties

Properties of the SQL DB table data set mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_set_id** | **str** | The id of the source data set. | 
**data_set_mapping_status** | **str** | Gets the status of the data set mapping. | [optional] [readonly] 
**database_name** | **str** | DatabaseName name of the sink data set | 
**provisioning_state** | **str** | Provisioning state of the data set mapping. | [optional] [readonly] 
**schema_name** | **str** | Schema of the table. Default value is dbo. | 
**sql_server_resource_id** | **str** | Resource id of SQL server | 
**table_name** | **str** | SQL DB table name. | 

## Example

```python
from openapi_client.models.sql_db_table_data_set_mapping_properties import SqlDBTableDataSetMappingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SqlDBTableDataSetMappingProperties from a JSON string
sql_db_table_data_set_mapping_properties_instance = SqlDBTableDataSetMappingProperties.from_json(json)
# print the JSON string representation of the object
print(SqlDBTableDataSetMappingProperties.to_json())

# convert the object into a dict
sql_db_table_data_set_mapping_properties_dict = sql_db_table_data_set_mapping_properties_instance.to_dict()
# create an instance of SqlDBTableDataSetMappingProperties from a dict
sql_db_table_data_set_mapping_properties_from_dict = SqlDBTableDataSetMappingProperties.from_dict(sql_db_table_data_set_mapping_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


