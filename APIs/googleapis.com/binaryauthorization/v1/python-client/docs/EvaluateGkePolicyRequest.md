# EvaluateGkePolicyRequest

Request message for PlatformPolicyEvaluationService.EvaluateGkePolicy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | **Dict[str, object]** | Required. JSON or YAML blob representing a Kubernetes resource. | [optional] 

## Example

```python
from openapi_client.models.evaluate_gke_policy_request import EvaluateGkePolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EvaluateGkePolicyRequest from a JSON string
evaluate_gke_policy_request_instance = EvaluateGkePolicyRequest.from_json(json)
# print the JSON string representation of the object
print(EvaluateGkePolicyRequest.to_json())

# convert the object into a dict
evaluate_gke_policy_request_dict = evaluate_gke_policy_request_instance.to_dict()
# create an instance of EvaluateGkePolicyRequest from a dict
evaluate_gke_policy_request_from_dict = EvaluateGkePolicyRequest.from_dict(evaluate_gke_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


