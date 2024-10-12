# ObjectExpression

Allows the declaration of an anonymous object within a declaration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**List[ModelProperty]**](ModelProperty.md) | Object properties | [optional] 
**type** | **str** | Type of AST node | [optional] 

## Example

```python
from openapi_client.models.object_expression import ObjectExpression

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectExpression from a JSON string
object_expression_instance = ObjectExpression.from_json(json)
# print the JSON string representation of the object
print(ObjectExpression.to_json())

# convert the object into a dict
object_expression_dict = object_expression_instance.to_dict()
# create an instance of ObjectExpression from a dict
object_expression_from_dict = ObjectExpression.from_dict(object_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


