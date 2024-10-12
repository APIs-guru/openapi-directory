# GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy

The IAM policies governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_type** | **str** | The asset type of the AnalyzeOrgPolicyGovernedAssetsResponse.GovernedIamPolicy.attached_resource. Example: &#x60;cloudresourcemanager.googleapis.com/Project&#x60; See [Cloud Asset Inventory Supported Asset Types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for all supported asset types. | [optional] 
**attached_resource** | **str** | The full resource name of the resource on which this IAM policy is set. Example: &#x60;//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1&#x60;. See [Cloud Asset Inventory Resource Name Format](https://cloud.google.com/asset-inventory/docs/resource-name-format) for more information. | [optional] 
**folders** | **List[str]** | The folder(s) that this IAM policy belongs to, in the format of folders/{FOLDER_NUMBER}. This field is available when the IAM policy belongs (directly or cascadingly) to one or more folders. | [optional] 
**organization** | **str** | The organization that this IAM policy belongs to, in the format of organizations/{ORGANIZATION_NUMBER}. This field is available when the IAM policy belongs (directly or cascadingly) to an organization. | [optional] 
**policy** | [**Policy**](Policy.md) |  | [optional] 
**project** | **str** | The project that this IAM policy belongs to, in the format of projects/{PROJECT_NUMBER}. This field is available when the IAM policy belongs to a project. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1_analyze_org_policy_governed_assets_response_governed_iam_policy import GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy from a JSON string
google_cloud_asset_v1_analyze_org_policy_governed_assets_response_governed_iam_policy_instance = GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy.to_json())

# convert the object into a dict
google_cloud_asset_v1_analyze_org_policy_governed_assets_response_governed_iam_policy_dict = google_cloud_asset_v1_analyze_org_policy_governed_assets_response_governed_iam_policy_instance.to_dict()
# create an instance of GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy from a dict
google_cloud_asset_v1_analyze_org_policy_governed_assets_response_governed_iam_policy_from_dict = GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy.from_dict(google_cloud_asset_v1_analyze_org_policy_governed_assets_response_governed_iam_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


