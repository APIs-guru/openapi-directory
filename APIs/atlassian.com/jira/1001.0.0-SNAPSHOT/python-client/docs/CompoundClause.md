# CompoundClause

A JQL query clause that consists of nested clauses. For example, `(labels in (urgent, blocker) OR lastCommentedBy = currentUser()). Note that, where nesting is not defined, the parser nests JQL clauses based on the operator precedence. For example, \"A OR B AND C\" is parsed as \"(A OR B) AND C\". See Setting the precedence of operators for more information about precedence in JQL queries.`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clauses** | [**List[JqlQueryClause]**](JqlQueryClause.md) | The list of nested clauses. | 
**operator** | **str** | The operator between the clauses. | 

## Example

```python
from openapi_client.models.compound_clause import CompoundClause

# TODO update the JSON string below
json = "{}"
# create an instance of CompoundClause from a JSON string
compound_clause_instance = CompoundClause.from_json(json)
# print the JSON string representation of the object
print(CompoundClause.to_json())

# convert the object into a dict
compound_clause_dict = compound_clause_instance.to_dict()
# create an instance of CompoundClause from a dict
compound_clause_from_dict = CompoundClause.from_dict(compound_clause_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


