# ParenExpression

Represents an expression wrapped in parenthesis

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression** | [**Expression**](Expression.md) |  | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.paren_expression import ParenExpression

# TODO update the JSON string below
json = "{}"
# create an instance of ParenExpression from a JSON string
paren_expression_instance = ParenExpression.from_json(json)
# print the JSON string representation of the object
print(ParenExpression.to_json())

# convert the object into a dict
paren_expression_dict = paren_expression_instance.to_dict()
# create an instance of ParenExpression from a dict
paren_expression_from_dict = ParenExpression.from_dict(paren_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


