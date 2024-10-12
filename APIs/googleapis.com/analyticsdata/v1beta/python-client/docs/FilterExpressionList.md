# FilterExpressionList

A list of filter expressions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expressions** | [**List[FilterExpression]**](FilterExpression.md) | A list of filter expressions. | [optional] 

## Example

```python
from openapi_client.models.filter_expression_list import FilterExpressionList

# TODO update the JSON string below
json = "{}"
# create an instance of FilterExpressionList from a JSON string
filter_expression_list_instance = FilterExpressionList.from_json(json)
# print the JSON string representation of the object
print(FilterExpressionList.to_json())

# convert the object into a dict
filter_expression_list_dict = filter_expression_list_instance.to_dict()
# create an instance of FilterExpressionList from a dict
filter_expression_list_from_dict = FilterExpressionList.from_dict(filter_expression_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


