# IamPolicyAnalysisResult

IAM Policy analysis result, consisting of one IAM policy binding and derived access control lists.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_control_lists** | [**List[GoogleCloudAssetV1p4beta1AccessControlList]**](GoogleCloudAssetV1p4beta1AccessControlList.md) | The access control lists derived from the iam_binding that match or potentially match resource and access selectors specified in the request. | [optional] 
**attached_resource_full_name** | **str** | The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of the resource to which the iam_binding policy attaches. | [optional] 
**fully_explored** | **bool** | Represents whether all analyses on the iam_binding have successfully finished. | [optional] 
**iam_binding** | [**Binding**](Binding.md) |  | [optional] 
**identity_list** | [**GoogleCloudAssetV1p4beta1IdentityList**](GoogleCloudAssetV1p4beta1IdentityList.md) |  | [optional] 

## Example

```python
from openapi_client.models.iam_policy_analysis_result import IamPolicyAnalysisResult

# TODO update the JSON string below
json = "{}"
# create an instance of IamPolicyAnalysisResult from a JSON string
iam_policy_analysis_result_instance = IamPolicyAnalysisResult.from_json(json)
# print the JSON string representation of the object
print(IamPolicyAnalysisResult.to_json())

# convert the object into a dict
iam_policy_analysis_result_dict = iam_policy_analysis_result_instance.to_dict()
# create an instance of IamPolicyAnalysisResult from a dict
iam_policy_analysis_result_from_dict = IamPolicyAnalysisResult.from_dict(iam_policy_analysis_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


