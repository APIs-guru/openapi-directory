# AnalyzeOrgPoliciesResponse

The response message for AssetService.AnalyzeOrgPolicies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constraint** | [**AnalyzerOrgPolicyConstraint**](AnalyzerOrgPolicyConstraint.md) |  | [optional] 
**next_page_token** | **str** | The page token to fetch the next page for AnalyzeOrgPoliciesResponse.org_policy_results. | [optional] 
**org_policy_results** | [**List[OrgPolicyResult]**](OrgPolicyResult.md) | The organization policies under the AnalyzeOrgPoliciesRequest.scope with the AnalyzeOrgPoliciesRequest.constraint. | [optional] 

## Example

```python
from openapi_client.models.analyze_org_policies_response import AnalyzeOrgPoliciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeOrgPoliciesResponse from a JSON string
analyze_org_policies_response_instance = AnalyzeOrgPoliciesResponse.from_json(json)
# print the JSON string representation of the object
print(AnalyzeOrgPoliciesResponse.to_json())

# convert the object into a dict
analyze_org_policies_response_dict = analyze_org_policies_response_instance.to_dict()
# create an instance of AnalyzeOrgPoliciesResponse from a dict
analyze_org_policies_response_from_dict = AnalyzeOrgPoliciesResponse.from_dict(analyze_org_policies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


