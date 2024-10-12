# LogicalExpression

Represents the rule conditions that collectively evaluate to either true or false

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**left** | [**Expression**](Expression.md) |  | [optional] 
**operator** | **str** |  | [optional] 
**right** | [**Expression**](Expression.md) |  | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.logical_expression import LogicalExpression

# TODO update the JSON string below
json = "{}"
# create an instance of LogicalExpression from a JSON string
logical_expression_instance = LogicalExpression.from_json(json)
# print the JSON string representation of the object
print(LogicalExpression.to_json())

# convert the object into a dict
logical_expression_dict = logical_expression_instance.to_dict()
# create an instance of LogicalExpression from a dict
logical_expression_from_dict = LogicalExpression.from_dict(logical_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


