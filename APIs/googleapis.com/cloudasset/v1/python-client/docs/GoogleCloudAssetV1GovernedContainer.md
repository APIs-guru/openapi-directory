# GoogleCloudAssetV1GovernedContainer

The organization/folder/project resource governed by organization policies of AnalyzeOrgPolicyGovernedContainersRequest.constraint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consolidated_policy** | [**AnalyzerOrgPolicy**](AnalyzerOrgPolicy.md) |  | [optional] 
**effective_tags** | [**List[EffectiveTagDetails]**](EffectiveTagDetails.md) | The effective tags on this resource. | [optional] 
**folders** | **List[str]** | The folder(s) that this resource belongs to, in the format of folders/{FOLDER_NUMBER}. This field is available when the resource belongs (directly or cascadingly) to one or more folders. | [optional] 
**full_resource_name** | **str** | The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of an organization/folder/project resource. | [optional] 
**organization** | **str** | The organization that this resource belongs to, in the format of organizations/{ORGANIZATION_NUMBER}. This field is available when the resource belongs (directly or cascadingly) to an organization. | [optional] 
**parent** | **str** | The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of the parent of AnalyzeOrgPolicyGovernedContainersResponse.GovernedContainer.full_resource_name. | [optional] 
**policy_bundle** | [**List[AnalyzerOrgPolicy]**](AnalyzerOrgPolicy.md) | The ordered list of all organization policies from the AnalyzeOrgPoliciesResponse.OrgPolicyResult.consolidated_policy.attached_resource. to the scope specified in the request. If the constraint is defined with default policy, it will also appear in the list. | [optional] 
**project** | **str** | The project that this resource belongs to, in the format of projects/{PROJECT_NUMBER}. This field is available when the resource belongs to a project. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1_governed_container import GoogleCloudAssetV1GovernedContainer

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1GovernedContainer from a JSON string
google_cloud_asset_v1_governed_container_instance = GoogleCloudAssetV1GovernedContainer.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1GovernedContainer.to_json())

# convert the object into a dict
google_cloud_asset_v1_governed_container_dict = google_cloud_asset_v1_governed_container_instance.to_dict()
# create an instance of GoogleCloudAssetV1GovernedContainer from a dict
google_cloud_asset_v1_governed_container_from_dict = GoogleCloudAssetV1GovernedContainer.from_dict(google_cloud_asset_v1_governed_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


