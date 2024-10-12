# MysqlColumn

MySQL Column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collation** | **str** | Column collation. | [optional] 
**column** | **str** | Column name. | [optional] 
**data_type** | **str** | The MySQL data type. Full data types list can be found here: https://dev.mysql.com/doc/refman/8.0/en/data-types.html | [optional] 
**length** | **int** | Column length. | [optional] 
**nullable** | **bool** | Whether or not the column can accept a null value. | [optional] 
**ordinal_position** | **int** | The ordinal position of the column in the table. | [optional] 
**precision** | **int** | Column precision. | [optional] 
**primary_key** | **bool** | Whether or not the column represents a primary key. | [optional] 
**scale** | **int** | Column scale. | [optional] 

## Example

```python
from openapi_client.models.mysql_column import MysqlColumn

# TODO update the JSON string below
json = "{}"
# create an instance of MysqlColumn from a JSON string
mysql_column_instance = MysqlColumn.from_json(json)
# print the JSON string representation of the object
print(MysqlColumn.to_json())

# convert the object into a dict
mysql_column_dict = mysql_column_instance.to_dict()
# create an instance of MysqlColumn from a dict
mysql_column_from_dict = MysqlColumn.from_dict(mysql_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


