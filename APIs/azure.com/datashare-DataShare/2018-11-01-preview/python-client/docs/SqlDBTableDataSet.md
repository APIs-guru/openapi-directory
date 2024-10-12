# SqlDBTableDataSet

A SQL DB table data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SqlDBTableProperties**](SqlDBTableProperties.md) |  | [optional] 
**kind** | **str** | Kind of data set. | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.sql_db_table_data_set import SqlDBTableDataSet

# TODO update the JSON string below
json = "{}"
# create an instance of SqlDBTableDataSet from a JSON string
sql_db_table_data_set_instance = SqlDBTableDataSet.from_json(json)
# print the JSON string representation of the object
print(SqlDBTableDataSet.to_json())

# convert the object into a dict
sql_db_table_data_set_dict = sql_db_table_data_set_instance.to_dict()
# create an instance of SqlDBTableDataSet from a dict
sql_db_table_data_set_from_dict = SqlDBTableDataSet.from_dict(sql_db_table_data_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


