# OptionStatementAssignment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**Identifier**](Identifier.md) |  | [optional] 
**init** | [**Expression**](Expression.md) |  | [optional] 
**type** | **str** | Type of AST node | [optional] 
**member** | [**MemberExpression**](MemberExpression.md) |  | [optional] 

## Example

```python
from openapi_client.models.option_statement_assignment import OptionStatementAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of OptionStatementAssignment from a JSON string
option_statement_assignment_instance = OptionStatementAssignment.from_json(json)
# print the JSON string representation of the object
print(OptionStatementAssignment.to_json())

# convert the object into a dict
option_statement_assignment_dict = option_statement_assignment_instance.to_dict()
# create an instance of OptionStatementAssignment from a dict
option_statement_assignment_from_dict = OptionStatementAssignment.from_dict(option_statement_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


