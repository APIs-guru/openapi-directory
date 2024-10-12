# Asset

An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy), or a relationship (e.g. an INSTANCE_TO_INSTANCEGROUP relationship). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_level** | [**GoogleIdentityAccesscontextmanagerV1AccessLevel**](GoogleIdentityAccesscontextmanagerV1AccessLevel.md) |  | [optional] 
**access_policy** | [**GoogleIdentityAccesscontextmanagerV1AccessPolicy**](GoogleIdentityAccesscontextmanagerV1AccessPolicy.md) |  | [optional] 
**ancestors** | **List[str]** | The ancestry path of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. If the asset is a project, folder, or organization, the ancestry path starts from the asset itself. Example: &#x60;[\&quot;projects/123456789\&quot;, \&quot;folders/5432\&quot;, \&quot;organizations/1234\&quot;]&#x60; | [optional] 
**asset_type** | **str** | The type of the asset. Example: &#x60;compute.googleapis.com/Disk&#x60; See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. | [optional] 
**iam_policy** | [**Policy**](Policy.md) |  | [optional] 
**name** | **str** | The full name of the asset. Example: &#x60;//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1&#x60; See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. | [optional] 
**org_policy** | [**List[GoogleCloudOrgpolicyV1Policy]**](GoogleCloudOrgpolicyV1Policy.md) | A representation of an [organization policy](https://cloud.google.com/resource-manager/docs/organization-policy/overview#organization_policy). There can be more than one organization policy with different constraints set on a given resource. | [optional] 
**os_inventory** | [**Inventory**](Inventory.md) |  | [optional] 
**related_asset** | [**RelatedAsset**](RelatedAsset.md) |  | [optional] 
**related_assets** | [**RelatedAssets**](RelatedAssets.md) |  | [optional] 
**resource** | [**Resource**](Resource.md) |  | [optional] 
**service_perimeter** | [**GoogleIdentityAccesscontextmanagerV1ServicePerimeter**](GoogleIdentityAccesscontextmanagerV1ServicePerimeter.md) |  | [optional] 
**update_time** | **str** | The last update timestamp of an asset. update_time is updated when create/update/delete operation is performed. | [optional] 

## Example

```python
from openapi_client.models.asset import Asset

# TODO update the JSON string below
json = "{}"
# create an instance of Asset from a JSON string
asset_instance = Asset.from_json(json)
# print the JSON string representation of the object
print(Asset.to_json())

# convert the object into a dict
asset_dict = asset_instance.to_dict()
# create an instance of Asset from a dict
asset_from_dict = Asset.from_dict(asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


