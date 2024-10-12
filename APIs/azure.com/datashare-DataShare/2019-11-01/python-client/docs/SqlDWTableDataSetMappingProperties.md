# SqlDWTableDataSetMappingProperties

Properties of the SQL DW table data set mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_set_id** | **str** | The id of the source data set. | 
**data_set_mapping_status** | **str** | Gets the status of the data set mapping. | [optional] [readonly] 
**data_warehouse_name** | **str** | DataWarehouse name of the source data set | 
**provisioning_state** | **str** | Provisioning state of the data set mapping. | [optional] [readonly] 
**schema_name** | **str** | Schema of the table. Default value is dbo. | 
**sql_server_resource_id** | **str** | Resource id of SQL server | 
**table_name** | **str** | SQL DW table name. | 

## Example

```python
from openapi_client.models.sql_dw_table_data_set_mapping_properties import SqlDWTableDataSetMappingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SqlDWTableDataSetMappingProperties from a JSON string
sql_dw_table_data_set_mapping_properties_instance = SqlDWTableDataSetMappingProperties.from_json(json)
# print the JSON string representation of the object
print(SqlDWTableDataSetMappingProperties.to_json())

# convert the object into a dict
sql_dw_table_data_set_mapping_properties_dict = sql_dw_table_data_set_mapping_properties_instance.to_dict()
# create an instance of SqlDWTableDataSetMappingProperties from a dict
sql_dw_table_data_set_mapping_properties_from_dict = SqlDWTableDataSetMappingProperties.from_dict(sql_dw_table_data_set_mapping_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


