# ConditionalExpression

Selects one of two expressions, `Alternate` or `Consequent`, depending on a third boolean expression, `Test`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate** | [**Expression**](Expression.md) |  | [optional] 
**consequent** | [**Expression**](Expression.md) |  | [optional] 
**test** | [**Expression**](Expression.md) |  | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.conditional_expression import ConditionalExpression

# TODO update the JSON string below
json = "{}"
# create an instance of ConditionalExpression from a JSON string
conditional_expression_instance = ConditionalExpression.from_json(json)
# print the JSON string representation of the object
print(ConditionalExpression.to_json())

# convert the object into a dict
conditional_expression_dict = conditional_expression_instance.to_dict()
# create an instance of ConditionalExpression from a dict
conditional_expression_from_dict = ConditionalExpression.from_dict(conditional_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


