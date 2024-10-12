# JqlQueryOrderByClauseElement

An element of the order-by JQL clause.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **str** | The direction in which to order the results. | [optional] 
**var_field** | [**JqlQueryField**](JqlQueryField.md) |  | 

## Example

```python
from openapi_client.models.jql_query_order_by_clause_element import JqlQueryOrderByClauseElement

# TODO update the JSON string below
json = "{}"
# create an instance of JqlQueryOrderByClauseElement from a JSON string
jql_query_order_by_clause_element_instance = JqlQueryOrderByClauseElement.from_json(json)
# print the JSON string representation of the object
print(JqlQueryOrderByClauseElement.to_json())

# convert the object into a dict
jql_query_order_by_clause_element_dict = jql_query_order_by_clause_element_instance.to_dict()
# create an instance of JqlQueryOrderByClauseElement from a dict
jql_query_order_by_clause_element_from_dict = JqlQueryOrderByClauseElement.from_dict(jql_query_order_by_clause_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


