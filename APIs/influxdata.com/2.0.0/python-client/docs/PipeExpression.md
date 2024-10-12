# PipeExpression

Call expression with pipe argument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**argument** | [**Expression**](Expression.md) |  | [optional] 
**call** | [**CallExpression**](CallExpression.md) |  | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.pipe_expression import PipeExpression

# TODO update the JSON string below
json = "{}"
# create an instance of PipeExpression from a JSON string
pipe_expression_instance = PipeExpression.from_json(json)
# print the JSON string representation of the object
print(PipeExpression.to_json())

# convert the object into a dict
pipe_expression_dict = pipe_expression_instance.to_dict()
# create an instance of PipeExpression from a dict
pipe_expression_from_dict = PipeExpression.from_dict(pipe_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


