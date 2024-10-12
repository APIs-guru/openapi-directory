# ExpressionEvaluationDetails

Evaluation details of policy language expressions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression** | **str** | Expression evaluated. | [optional] 
**expression_value** | **object** | Value of the expression. | [optional] 
**operator** | **str** | Operator to compare the expression value and the target value. | [optional] 
**path** | **str** | Property path if the expression is a field or an alias. | [optional] 
**result** | **str** | Evaluation result. | [optional] 
**target_value** | **object** | Target value to be compared with the expression value. | [optional] 

## Example

```python
from openapi_client.models.expression_evaluation_details import ExpressionEvaluationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressionEvaluationDetails from a JSON string
expression_evaluation_details_instance = ExpressionEvaluationDetails.from_json(json)
# print the JSON string representation of the object
print(ExpressionEvaluationDetails.to_json())

# convert the object into a dict
expression_evaluation_details_dict = expression_evaluation_details_instance.to_dict()
# create an instance of ExpressionEvaluationDetails from a dict
expression_evaluation_details_from_dict = ExpressionEvaluationDetails.from_dict(expression_evaluation_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


