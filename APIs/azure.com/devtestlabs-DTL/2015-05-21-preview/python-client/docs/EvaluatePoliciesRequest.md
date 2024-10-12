# EvaluatePoliciesRequest

Request body for evaluating a policy set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policies** | [**List[EvaluatePoliciesProperties]**](EvaluatePoliciesProperties.md) | Policies to evaluate. | [optional] 

## Example

```python
from openapi_client.models.evaluate_policies_request import EvaluatePoliciesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EvaluatePoliciesRequest from a JSON string
evaluate_policies_request_instance = EvaluatePoliciesRequest.from_json(json)
# print the JSON string representation of the object
print(EvaluatePoliciesRequest.to_json())

# convert the object into a dict
evaluate_policies_request_dict = evaluate_policies_request_instance.to_dict()
# create an instance of EvaluatePoliciesRequest from a dict
evaluate_policies_request_from_dict = EvaluatePoliciesRequest.from_dict(evaluate_policies_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


