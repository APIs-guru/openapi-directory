# QueryResult

Execution results of the query. The result is formatted as rows represented by BigQuery compatible [schema]. When pagination is necessary, it will contains the page token to retrieve the results of following pages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of the results. | [optional] 
**rows** | **List[Dict[str, object]]** | Each row hold a query result in the format of &#x60;Struct&#x60;. | [optional] 
**var_schema** | [**TableSchema**](TableSchema.md) |  | [optional] 
**total_rows** | **str** | Total rows of the whole query results. | [optional] 

## Example

```python
from openapi_client.models.query_result import QueryResult

# TODO update the JSON string below
json = "{}"
# create an instance of QueryResult from a JSON string
query_result_instance = QueryResult.from_json(json)
# print the JSON string representation of the object
print(QueryResult.to_json())

# convert the object into a dict
query_result_dict = query_result_instance.to_dict()
# create an instance of QueryResult from a dict
query_result_from_dict = QueryResult.from_dict(query_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


