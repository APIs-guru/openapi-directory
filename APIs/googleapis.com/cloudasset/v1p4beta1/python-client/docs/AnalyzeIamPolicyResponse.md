# AnalyzeIamPolicyResponse

A response message for AssetService.AnalyzeIamPolicy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fully_explored** | **bool** | Represents whether all entries in the main_analysis and service_account_impersonation_analysis have been fully explored to answer the query in the request. | [optional] 
**main_analysis** | [**IamPolicyAnalysis**](IamPolicyAnalysis.md) |  | [optional] 
**non_critical_errors** | [**List[GoogleCloudAssetV1p4beta1AnalysisState]**](GoogleCloudAssetV1p4beta1AnalysisState.md) | A list of non-critical errors happened during the request handling to explain why &#x60;fully_explored&#x60; is false, or empty if no error happened. | [optional] 
**service_account_impersonation_analysis** | [**List[IamPolicyAnalysis]**](IamPolicyAnalysis.md) | The service account impersonation analysis if AnalyzeIamPolicyRequest.analyze_service_account_impersonation is enabled. | [optional] 

## Example

```python
from openapi_client.models.analyze_iam_policy_response import AnalyzeIamPolicyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeIamPolicyResponse from a JSON string
analyze_iam_policy_response_instance = AnalyzeIamPolicyResponse.from_json(json)
# print the JSON string representation of the object
print(AnalyzeIamPolicyResponse.to_json())

# convert the object into a dict
analyze_iam_policy_response_dict = analyze_iam_policy_response_instance.to_dict()
# create an instance of AnalyzeIamPolicyResponse from a dict
analyze_iam_policy_response_from_dict = AnalyzeIamPolicyResponse.from_dict(analyze_iam_policy_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


