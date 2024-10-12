# SqlServer

A SQL server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SqlServerProperties**](SqlServerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sql_server import SqlServer

# TODO update the JSON string below
json = "{}"
# create an instance of SqlServer from a JSON string
sql_server_instance = SqlServer.from_json(json)
# print the JSON string representation of the object
print(SqlServer.to_json())

# convert the object into a dict
sql_server_dict = sql_server_instance.to_dict()
# create an instance of SqlServer from a dict
sql_server_from_dict = SqlServer.from_dict(sql_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


