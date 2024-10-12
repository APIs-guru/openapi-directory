# EvaluateGkePolicyResponse

Response message for PlatformPolicyEvaluationService.EvaluateGkePolicy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[PodResult]**](PodResult.md) | Evaluation result for each Pod contained in the request. | [optional] 
**verdict** | **str** | The result of evaluating all Pods in the request. | [optional] 

## Example

```python
from openapi_client.models.evaluate_gke_policy_response import EvaluateGkePolicyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EvaluateGkePolicyResponse from a JSON string
evaluate_gke_policy_response_instance = EvaluateGkePolicyResponse.from_json(json)
# print the JSON string representation of the object
print(EvaluateGkePolicyResponse.to_json())

# convert the object into a dict
evaluate_gke_policy_response_dict = evaluate_gke_policy_response_instance.to_dict()
# create an instance of EvaluateGkePolicyResponse from a dict
evaluate_gke_policy_response_from_dict = EvaluateGkePolicyResponse.from_dict(evaluate_gke_policy_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


