# SqlDWTableDataSetMapping

A SQL DW Table data set mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SqlDWTableDataSetMappingProperties**](SqlDWTableDataSetMappingProperties.md) |  | 
**kind** | **str** | Kind of data set mapping. | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.sql_dw_table_data_set_mapping import SqlDWTableDataSetMapping

# TODO update the JSON string below
json = "{}"
# create an instance of SqlDWTableDataSetMapping from a JSON string
sql_dw_table_data_set_mapping_instance = SqlDWTableDataSetMapping.from_json(json)
# print the JSON string representation of the object
print(SqlDWTableDataSetMapping.to_json())

# convert the object into a dict
sql_dw_table_data_set_mapping_dict = sql_dw_table_data_set_mapping_instance.to_dict()
# create an instance of SqlDWTableDataSetMapping from a dict
sql_dw_table_data_set_mapping_from_dict = SqlDWTableDataSetMapping.from_dict(sql_dw_table_data_set_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


