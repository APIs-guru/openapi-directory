# ExecuteSqlQueryResponse

A response returned by the connection after executing the sql query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | **List[Dict[str, object]]** | In the case of successful execution of the query the response contains results returned by the external system. For example, the result rows of the query are contained in the &#39;results&#39; Struct list - \&quot;results\&quot;: [ { \&quot;field1\&quot;: \&quot;val1\&quot;, \&quot;field2\&quot;: \&quot;val2\&quot;,.. },.. ] Each Struct row can contain fields any type of like nested Structs or lists. | [optional] 

## Example

```python
from openapi_client.models.execute_sql_query_response import ExecuteSqlQueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExecuteSqlQueryResponse from a JSON string
execute_sql_query_response_instance = ExecuteSqlQueryResponse.from_json(json)
# print the JSON string representation of the object
print(ExecuteSqlQueryResponse.to_json())

# convert the object into a dict
execute_sql_query_response_dict = execute_sql_query_response_instance.to_dict()
# create an instance of ExecuteSqlQueryResponse from a dict
execute_sql_query_response_from_dict = ExecuteSqlQueryResponse.from_dict(execute_sql_query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


