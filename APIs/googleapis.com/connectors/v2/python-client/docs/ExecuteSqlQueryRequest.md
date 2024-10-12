# ExecuteSqlQueryRequest

An execute sql query request containing the query and the connection to execute it on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | [**Query**](Query.md) |  | [optional] 

## Example

```python
from openapi_client.models.execute_sql_query_request import ExecuteSqlQueryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExecuteSqlQueryRequest from a JSON string
execute_sql_query_request_instance = ExecuteSqlQueryRequest.from_json(json)
# print the JSON string representation of the object
print(ExecuteSqlQueryRequest.to_json())

# convert the object into a dict
execute_sql_query_request_dict = execute_sql_query_request_instance.to_dict()
# create an instance of ExecuteSqlQueryRequest from a dict
execute_sql_query_request_from_dict = ExecuteSqlQueryRequest.from_dict(execute_sql_query_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


