# Statement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **str** | Raw source text | [optional] 
**type** | **str** | Type of AST node | [optional] 
**id** | [**Identifier**](Identifier.md) |  | [optional] 
**init** | [**Expression**](Expression.md) |  | [optional] 
**member** | [**MemberExpression**](MemberExpression.md) |  | [optional] 
**expression** | [**Expression**](Expression.md) |  | [optional] 
**argument** | [**Expression**](Expression.md) |  | [optional] 
**assignment** | [**VariableAssignment**](VariableAssignment.md) |  | [optional] 

## Example

```python
from openapi_client.models.statement import Statement

# TODO update the JSON string below
json = "{}"
# create an instance of Statement from a JSON string
statement_instance = Statement.from_json(json)
# print the JSON string representation of the object
print(Statement.to_json())

# convert the object into a dict
statement_dict = statement_instance.to_dict()
# create an instance of Statement from a dict
statement_from_dict = Statement.from_dict(statement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


