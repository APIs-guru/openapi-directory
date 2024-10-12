# SqlServerListResult

A list of SQL servers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[SqlServer]**](SqlServer.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sql_server_list_result import SqlServerListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SqlServerListResult from a JSON string
sql_server_list_result_instance = SqlServerListResult.from_json(json)
# print the JSON string representation of the object
print(SqlServerListResult.to_json())

# convert the object into a dict
sql_server_list_result_dict = sql_server_list_result_instance.to_dict()
# create an instance of SqlServerListResult from a dict
sql_server_list_result_from_dict = SqlServerListResult.from_dict(sql_server_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


