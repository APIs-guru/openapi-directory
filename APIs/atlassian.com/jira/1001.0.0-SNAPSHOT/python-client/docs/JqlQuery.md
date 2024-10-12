# JqlQuery

A parsed JQL query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_by** | [**JqlQueryOrderByClause**](JqlQueryOrderByClause.md) |  | [optional] 
**where** | [**JqlQueryClause**](JqlQueryClause.md) |  | [optional] 

## Example

```python
from openapi_client.models.jql_query import JqlQuery

# TODO update the JSON string below
json = "{}"
# create an instance of JqlQuery from a JSON string
jql_query_instance = JqlQuery.from_json(json)
# print the JSON string representation of the object
print(JqlQuery.to_json())

# convert the object into a dict
jql_query_dict = jql_query_instance.to_dict()
# create an instance of JqlQuery from a dict
jql_query_from_dict = JqlQuery.from_dict(jql_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


