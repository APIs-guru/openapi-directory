# PolicyEvaluationDetails

Policy evaluation details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluated_expressions** | [**List[ExpressionEvaluationDetails]**](ExpressionEvaluationDetails.md) | Details of the evaluated expressions. | [optional] 
**if_not_exists_details** | [**IfNotExistsEvaluationDetails**](IfNotExistsEvaluationDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.policy_evaluation_details import PolicyEvaluationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyEvaluationDetails from a JSON string
policy_evaluation_details_instance = PolicyEvaluationDetails.from_json(json)
# print the JSON string representation of the object
print(PolicyEvaluationDetails.to_json())

# convert the object into a dict
policy_evaluation_details_dict = policy_evaluation_details_instance.to_dict()
# create an instance of PolicyEvaluationDetails from a dict
policy_evaluation_details_from_dict = PolicyEvaluationDetails.from_dict(policy_evaluation_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


