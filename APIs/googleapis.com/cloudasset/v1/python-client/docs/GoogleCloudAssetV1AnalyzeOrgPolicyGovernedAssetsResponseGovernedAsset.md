# GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset

Represents a Google Cloud asset(resource or IAM policy) governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consolidated_policy** | [**AnalyzerOrgPolicy**](AnalyzerOrgPolicy.md) |  | [optional] 
**governed_iam_policy** | [**GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy**](GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy.md) |  | [optional] 
**governed_resource** | [**GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource**](GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource.md) |  | [optional] 
**policy_bundle** | [**List[AnalyzerOrgPolicy]**](AnalyzerOrgPolicy.md) | The ordered list of all organization policies from the AnalyzeOrgPoliciesResponse.OrgPolicyResult.consolidated_policy.attached_resource to the scope specified in the request. If the constraint is defined with default policy, it will also appear in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1_analyze_org_policy_governed_assets_response_governed_asset import GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset from a JSON string
google_cloud_asset_v1_analyze_org_policy_governed_assets_response_governed_asset_instance = GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset.to_json())

# convert the object into a dict
google_cloud_asset_v1_analyze_org_policy_governed_assets_response_governed_asset_dict = google_cloud_asset_v1_analyze_org_policy_governed_assets_response_governed_asset_instance.to_dict()
# create an instance of GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset from a dict
google_cloud_asset_v1_analyze_org_policy_governed_assets_response_governed_asset_from_dict = GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset.from_dict(google_cloud_asset_v1_analyze_org_policy_governed_assets_response_governed_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


