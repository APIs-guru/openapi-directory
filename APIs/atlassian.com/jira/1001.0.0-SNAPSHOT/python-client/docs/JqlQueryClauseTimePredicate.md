# JqlQueryClauseTimePredicate

A time predicate for a temporal JQL clause.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operand** | [**JqlQueryClauseOperand**](JqlQueryClauseOperand.md) |  | 
**operator** | **str** | The operator between the field and the operand. | 

## Example

```python
from openapi_client.models.jql_query_clause_time_predicate import JqlQueryClauseTimePredicate

# TODO update the JSON string below
json = "{}"
# create an instance of JqlQueryClauseTimePredicate from a JSON string
jql_query_clause_time_predicate_instance = JqlQueryClauseTimePredicate.from_json(json)
# print the JSON string representation of the object
print(JqlQueryClauseTimePredicate.to_json())

# convert the object into a dict
jql_query_clause_time_predicate_dict = jql_query_clause_time_predicate_instance.to_dict()
# create an instance of JqlQueryClauseTimePredicate from a dict
jql_query_clause_time_predicate_from_dict = JqlQueryClauseTimePredicate.from_dict(jql_query_clause_time_predicate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


