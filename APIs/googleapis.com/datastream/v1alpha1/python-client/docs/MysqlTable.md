# MysqlTable

MySQL table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mysql_columns** | [**List[MysqlColumn]**](MysqlColumn.md) | MySQL columns in the database. When unspecified as part of include/exclude lists, includes/excludes everything. | [optional] 
**table_name** | **str** | Table name. | [optional] 

## Example

```python
from openapi_client.models.mysql_table import MysqlTable

# TODO update the JSON string below
json = "{}"
# create an instance of MysqlTable from a JSON string
mysql_table_instance = MysqlTable.from_json(json)
# print the JSON string representation of the object
print(MysqlTable.to_json())

# convert the object into a dict
mysql_table_dict = mysql_table_instance.to_dict()
# create an instance of MysqlTable from a dict
mysql_table_from_dict = MysqlTable.from_dict(mysql_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


