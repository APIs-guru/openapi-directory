# QueryList

A list of queries to run on a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queries** | **List[str]** | Required. The queries to execute. You do not need to end a query expression with a semicolon. Multiple queries can be specified in one string by separating each with a semicolon. Here is an example of a Dataproc API snippet that uses a QueryList to specify a HiveJob: \&quot;hiveJob\&quot;: { \&quot;queryList\&quot;: { \&quot;queries\&quot;: [ \&quot;query1\&quot;, \&quot;query2\&quot;, \&quot;query3;query4\&quot;, ] } }  | [optional] 

## Example

```python
from openapi_client.models.query_list import QueryList

# TODO update the JSON string below
json = "{}"
# create an instance of QueryList from a JSON string
query_list_instance = QueryList.from_json(json)
# print the JSON string representation of the object
print(QueryList.to_json())

# convert the object into a dict
query_list_dict = query_list_instance.to_dict()
# create an instance of QueryList from a dict
query_list_from_dict = QueryList.from_dict(query_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


