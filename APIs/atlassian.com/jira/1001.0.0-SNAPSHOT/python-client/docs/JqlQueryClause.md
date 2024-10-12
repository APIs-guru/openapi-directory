# JqlQueryClause

A JQL query clause.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clauses** | [**List[JqlQueryClause]**](JqlQueryClause.md) | The list of nested clauses. | 
**operator** | **str** | The operator applied to the field. | 
**var_field** | [**JqlQueryField**](JqlQueryField.md) |  | 
**operand** | [**JqlQueryClauseOperand**](JqlQueryClauseOperand.md) |  | 
**predicates** | [**List[JqlQueryClauseTimePredicate]**](JqlQueryClauseTimePredicate.md) | The list of time predicates. | 

## Example

```python
from openapi_client.models.jql_query_clause import JqlQueryClause

# TODO update the JSON string below
json = "{}"
# create an instance of JqlQueryClause from a JSON string
jql_query_clause_instance = JqlQueryClause.from_json(json)
# print the JSON string representation of the object
print(JqlQueryClause.to_json())

# convert the object into a dict
jql_query_clause_dict = jql_query_clause_instance.to_dict()
# create an instance of JqlQueryClause from a dict
jql_query_clause_from_dict = JqlQueryClause.from_dict(jql_query_clause_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


