# MysqlRdbms

MySQL database structure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mysql_databases** | [**List[MysqlDatabase]**](MysqlDatabase.md) | Mysql databases on the server | [optional] 

## Example

```python
from openapi_client.models.mysql_rdbms import MysqlRdbms

# TODO update the JSON string below
json = "{}"
# create an instance of MysqlRdbms from a JSON string
mysql_rdbms_instance = MysqlRdbms.from_json(json)
# print the JSON string representation of the object
print(MysqlRdbms.to_json())

# convert the object into a dict
mysql_rdbms_dict = mysql_rdbms_instance.to_dict()
# create an instance of MysqlRdbms from a dict
mysql_rdbms_from_dict = MysqlRdbms.from_dict(mysql_rdbms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


