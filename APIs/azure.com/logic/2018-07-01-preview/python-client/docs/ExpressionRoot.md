# ExpressionRoot


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | The path. | [optional] 
**error** | [**AzureResourceErrorInfo**](AzureResourceErrorInfo.md) |  | [optional] 
**subexpressions** | [**List[Expression]**](Expression.md) |  | [optional] 
**text** | **str** |  | [optional] 
**value** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.expression_root import ExpressionRoot

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressionRoot from a JSON string
expression_root_instance = ExpressionRoot.from_json(json)
# print the JSON string representation of the object
print(ExpressionRoot.to_json())

# convert the object into a dict
expression_root_dict = expression_root_instance.to_dict()
# create an instance of ExpressionRoot from a dict
expression_root_from_dict = ExpressionRoot.from_dict(expression_root_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


