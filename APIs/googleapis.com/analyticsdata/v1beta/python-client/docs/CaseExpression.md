# CaseExpression

Used to convert a dimension value to a single case.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_name** | **str** | Name of a dimension. The name must refer back to a name in dimensions field of the request. | [optional] 

## Example

```python
from openapi_client.models.case_expression import CaseExpression

# TODO update the JSON string below
json = "{}"
# create an instance of CaseExpression from a JSON string
case_expression_instance = CaseExpression.from_json(json)
# print the JSON string representation of the object
print(CaseExpression.to_json())

# convert the object into a dict
case_expression_dict = case_expression_instance.to_dict()
# create an instance of CaseExpression from a dict
case_expression_from_dict = CaseExpression.from_dict(case_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


