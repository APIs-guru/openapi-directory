# SqlServerRdbms

SQLServer database structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schemas** | [**List[SqlServerSchema]**](SqlServerSchema.md) | SQLServer schemas in the database server. | [optional] 

## Example

```python
from openapi_client.models.sql_server_rdbms import SqlServerRdbms

# TODO update the JSON string below
json = "{}"
# create an instance of SqlServerRdbms from a JSON string
sql_server_rdbms_instance = SqlServerRdbms.from_json(json)
# print the JSON string representation of the object
print(SqlServerRdbms.to_json())

# convert the object into a dict
sql_server_rdbms_dict = sql_server_rdbms_instance.to_dict()
# create an instance of SqlServerRdbms from a dict
sql_server_rdbms_from_dict = SqlServerRdbms.from_dict(sql_server_rdbms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


