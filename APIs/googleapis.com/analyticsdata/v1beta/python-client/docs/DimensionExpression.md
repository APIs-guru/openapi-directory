# DimensionExpression

Used to express a dimension which is the result of a formula of multiple dimensions. Example usages: 1) lower_case(dimension) 2) concatenate(dimension1, symbol, dimension2).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concatenate** | [**ConcatenateExpression**](ConcatenateExpression.md) |  | [optional] 
**lower_case** | [**CaseExpression**](CaseExpression.md) |  | [optional] 
**upper_case** | [**CaseExpression**](CaseExpression.md) |  | [optional] 

## Example

```python
from openapi_client.models.dimension_expression import DimensionExpression

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionExpression from a JSON string
dimension_expression_instance = DimensionExpression.from_json(json)
# print the JSON string representation of the object
print(DimensionExpression.to_json())

# convert the object into a dict
dimension_expression_dict = dimension_expression_instance.to_dict()
# create an instance of DimensionExpression from a dict
dimension_expression_from_dict = DimensionExpression.from_dict(dimension_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


