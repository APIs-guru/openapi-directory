# SqlServerSchema

SQLServer schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | **str** | Schema name. | [optional] 
**tables** | [**List[SqlServerTable]**](SqlServerTable.md) | Tables in the schema. | [optional] 

## Example

```python
from openapi_client.models.sql_server_schema import SqlServerSchema

# TODO update the JSON string below
json = "{}"
# create an instance of SqlServerSchema from a JSON string
sql_server_schema_instance = SqlServerSchema.from_json(json)
# print the JSON string representation of the object
print(SqlServerSchema.to_json())

# convert the object into a dict
sql_server_schema_dict = sql_server_schema_instance.to_dict()
# create an instance of SqlServerSchema from a dict
sql_server_schema_from_dict = SqlServerSchema.from_dict(sql_server_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


