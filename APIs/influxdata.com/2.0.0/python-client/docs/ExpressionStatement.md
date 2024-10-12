# ExpressionStatement

May consist of an expression that does not return a value and is executed solely for its side-effects

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression** | [**Expression**](Expression.md) |  | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.expression_statement import ExpressionStatement

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressionStatement from a JSON string
expression_statement_instance = ExpressionStatement.from_json(json)
# print the JSON string representation of the object
print(ExpressionStatement.to_json())

# convert the object into a dict
expression_statement_dict = expression_statement_instance.to_dict()
# create an instance of ExpressionStatement from a dict
expression_statement_from_dict = ExpressionStatement.from_dict(expression_statement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


