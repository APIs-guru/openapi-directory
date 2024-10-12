# BatchGetEffectiveIamPoliciesResponse

A response message for AssetService.BatchGetEffectiveIamPolicies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_results** | [**List[EffectiveIamPolicy]**](EffectiveIamPolicy.md) | The effective policies for a batch of resources. Note that the results order is the same as the order of BatchGetEffectiveIamPoliciesRequest.names. When a resource does not have any effective IAM policies, its corresponding policy_result will contain empty EffectiveIamPolicy.policies. | [optional] 

## Example

```python
from openapi_client.models.batch_get_effective_iam_policies_response import BatchGetEffectiveIamPoliciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetEffectiveIamPoliciesResponse from a JSON string
batch_get_effective_iam_policies_response_instance = BatchGetEffectiveIamPoliciesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchGetEffectiveIamPoliciesResponse.to_json())

# convert the object into a dict
batch_get_effective_iam_policies_response_dict = batch_get_effective_iam_policies_response_instance.to_dict()
# create an instance of BatchGetEffectiveIamPoliciesResponse from a dict
batch_get_effective_iam_policies_response_from_dict = BatchGetEffectiveIamPoliciesResponse.from_dict(batch_get_effective_iam_policies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


