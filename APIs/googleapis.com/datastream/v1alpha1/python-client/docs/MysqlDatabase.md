# MysqlDatabase

MySQL database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_name** | **str** | Database name. | [optional] 
**mysql_tables** | [**List[MysqlTable]**](MysqlTable.md) | Tables in the database. | [optional] 

## Example

```python
from openapi_client.models.mysql_database import MysqlDatabase

# TODO update the JSON string below
json = "{}"
# create an instance of MysqlDatabase from a JSON string
mysql_database_instance = MysqlDatabase.from_json(json)
# print the JSON string representation of the object
print(MysqlDatabase.to_json())

# convert the object into a dict
mysql_database_dict = mysql_database_instance.to_dict()
# create an instance of MysqlDatabase from a dict
mysql_database_from_dict = MysqlDatabase.from_dict(mysql_database_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


