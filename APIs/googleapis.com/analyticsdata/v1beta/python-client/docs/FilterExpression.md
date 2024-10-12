# FilterExpression

To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**and_group** | [**FilterExpressionList**](FilterExpressionList.md) |  | [optional] 
**filter** | [**Filter**](Filter.md) |  | [optional] 
**not_expression** | [**FilterExpression**](FilterExpression.md) |  | [optional] 
**or_group** | [**FilterExpressionList**](FilterExpressionList.md) |  | [optional] 

## Example

```python
from openapi_client.models.filter_expression import FilterExpression

# TODO update the JSON string below
json = "{}"
# create an instance of FilterExpression from a JSON string
filter_expression_instance = FilterExpression.from_json(json)
# print the JSON string representation of the object
print(FilterExpression.to_json())

# convert the object into a dict
filter_expression_dict = filter_expression_instance.to_dict()
# create an instance of FilterExpression from a dict
filter_expression_from_dict = FilterExpression.from_dict(filter_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


