# IndexExpression

Represents indexing into an array

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**array** | [**Expression**](Expression.md) |  | [optional] 
**index** | [**Expression**](Expression.md) |  | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.index_expression import IndexExpression

# TODO update the JSON string below
json = "{}"
# create an instance of IndexExpression from a JSON string
index_expression_instance = IndexExpression.from_json(json)
# print the JSON string representation of the object
print(IndexExpression.to_json())

# convert the object into a dict
index_expression_dict = index_expression_instance.to_dict()
# create an instance of IndexExpression from a dict
index_expression_from_dict = IndexExpression.from_dict(index_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


