# EvaluatePoliciesResponse

Response body for evaluating a policy set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[PolicySetResult]**](PolicySetResult.md) | Results of evaluating a policy set. | [optional] 

## Example

```python
from openapi_client.models.evaluate_policies_response import EvaluatePoliciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EvaluatePoliciesResponse from a JSON string
evaluate_policies_response_instance = EvaluatePoliciesResponse.from_json(json)
# print the JSON string representation of the object
print(EvaluatePoliciesResponse.to_json())

# convert the object into a dict
evaluate_policies_response_dict = evaluate_policies_response_instance.to_dict()
# create an instance of EvaluatePoliciesResponse from a dict
evaluate_policies_response_from_dict = EvaluatePoliciesResponse.from_dict(evaluate_policies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


