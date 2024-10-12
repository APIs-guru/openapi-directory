# ArrayExpression

Used to create and directly specify the elements of an array object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**elements** | [**List[Expression]**](Expression.md) | Elements of the array | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.array_expression import ArrayExpression

# TODO update the JSON string below
json = "{}"
# create an instance of ArrayExpression from a JSON string
array_expression_instance = ArrayExpression.from_json(json)
# print the JSON string representation of the object
print(ArrayExpression.to_json())

# convert the object into a dict
array_expression_dict = array_expression_instance.to_dict()
# create an instance of ArrayExpression from a dict
array_expression_from_dict = ArrayExpression.from_dict(array_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


