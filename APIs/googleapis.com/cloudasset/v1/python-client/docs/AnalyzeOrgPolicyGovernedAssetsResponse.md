# AnalyzeOrgPolicyGovernedAssetsResponse

The response message for AssetService.AnalyzeOrgPolicyGovernedAssets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constraint** | [**AnalyzerOrgPolicyConstraint**](AnalyzerOrgPolicyConstraint.md) |  | [optional] 
**governed_assets** | [**List[GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset]**](GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset.md) | The list of the analyzed governed assets. | [optional] 
**next_page_token** | **str** | The page token to fetch the next page for AnalyzeOrgPolicyGovernedAssetsResponse.governed_assets. | [optional] 

## Example

```python
from openapi_client.models.analyze_org_policy_governed_assets_response import AnalyzeOrgPolicyGovernedAssetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeOrgPolicyGovernedAssetsResponse from a JSON string
analyze_org_policy_governed_assets_response_instance = AnalyzeOrgPolicyGovernedAssetsResponse.from_json(json)
# print the JSON string representation of the object
print(AnalyzeOrgPolicyGovernedAssetsResponse.to_json())

# convert the object into a dict
analyze_org_policy_governed_assets_response_dict = analyze_org_policy_governed_assets_response_instance.to_dict()
# create an instance of AnalyzeOrgPolicyGovernedAssetsResponse from a dict
analyze_org_policy_governed_assets_response_from_dict = AnalyzeOrgPolicyGovernedAssetsResponse.from_dict(analyze_org_policy_governed_assets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


