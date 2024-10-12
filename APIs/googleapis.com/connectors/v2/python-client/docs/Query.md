# Query

A wrapper around the SQL query statement. This is needed so that the JSON representation of ExecuteSqlQueryRequest has the following format: `{\"query\":\"select *\"}`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_rows** | **str** | Sets the limit for the maximum number of rows returned after the query execution. | [optional] 
**query** | **str** | Required. Sql query to execute. | [optional] 
**query_parameters** | [**List[QueryParameter]**](QueryParameter.md) | In the struct, the value corresponds to the value of query parameter and date type corresponds to the date type of the query parameter. | [optional] 
**timeout** | **str** | Sets the number of seconds the driver will wait for a query to execute. | [optional] 

## Example

```python
from openapi_client.models.query import Query

# TODO update the JSON string below
json = "{}"
# create an instance of Query from a JSON string
query_instance = Query.from_json(json)
# print the JSON string representation of the object
print(Query.to_json())

# convert the object into a dict
query_dict = query_instance.to_dict()
# create an instance of Query from a dict
query_from_dict = Query.from_dict(query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


