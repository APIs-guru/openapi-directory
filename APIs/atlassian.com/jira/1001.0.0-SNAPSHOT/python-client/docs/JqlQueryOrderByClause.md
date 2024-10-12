# JqlQueryOrderByClause

Details of the order-by JQL clause.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**List[JqlQueryOrderByClauseElement]**](JqlQueryOrderByClauseElement.md) | The list of order-by clause fields and their ordering directives. | 

## Example

```python
from openapi_client.models.jql_query_order_by_clause import JqlQueryOrderByClause

# TODO update the JSON string below
json = "{}"
# create an instance of JqlQueryOrderByClause from a JSON string
jql_query_order_by_clause_instance = JqlQueryOrderByClause.from_json(json)
# print the JSON string representation of the object
print(JqlQueryOrderByClause.to_json())

# convert the object into a dict
jql_query_order_by_clause_dict = jql_query_order_by_clause_instance.to_dict()
# create an instance of JqlQueryOrderByClause from a dict
jql_query_order_by_clause_from_dict = JqlQueryOrderByClause.from_dict(jql_query_order_by_clause_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


