# GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource

The Google Cloud resources governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_type** | **str** | The asset type of the AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full_resource_name Example: &#x60;cloudresourcemanager.googleapis.com/Project&#x60; See [Cloud Asset Inventory Supported Asset Types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for all supported asset types. | [optional] 
**effective_tags** | [**List[EffectiveTagDetails]**](EffectiveTagDetails.md) | The effective tags on this resource. | [optional] 
**folders** | **List[str]** | The folder(s) that this resource belongs to, in the format of folders/{FOLDER_NUMBER}. This field is available when the resource belongs (directly or cascadingly) to one or more folders. | [optional] 
**full_resource_name** | **str** | The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of the Google Cloud resource. | [optional] 
**organization** | **str** | The organization that this resource belongs to, in the format of organizations/{ORGANIZATION_NUMBER}. This field is available when the resource belongs (directly or cascadingly) to an organization. | [optional] 
**parent** | **str** | The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of the parent of AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full_resource_name. | [optional] 
**project** | **str** | The project that this resource belongs to, in the format of projects/{PROJECT_NUMBER}. This field is available when the resource belongs to a project. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1_analyze_org_policy_governed_assets_response_governed_resource import GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource from a JSON string
google_cloud_asset_v1_analyze_org_policy_governed_assets_response_governed_resource_instance = GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource.to_json())

# convert the object into a dict
google_cloud_asset_v1_analyze_org_policy_governed_assets_response_governed_resource_dict = google_cloud_asset_v1_analyze_org_policy_governed_assets_response_governed_resource_instance.to_dict()
# create an instance of GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource from a dict
google_cloud_asset_v1_analyze_org_policy_governed_assets_response_governed_resource_from_dict = GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource.from_dict(google_cloud_asset_v1_analyze_org_policy_governed_assets_response_governed_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


