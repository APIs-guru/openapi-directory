# GoogleCloudAssetV1p7beta1RelatedAsset

An asset identify in Google Cloud which contains its name, type and ancestors. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ancestors** | **List[str]** | The ancestors of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. Example: &#x60;[\&quot;projects/123456789\&quot;, \&quot;folders/5432\&quot;, \&quot;organizations/1234\&quot;]&#x60; | [optional] 
**asset** | **str** | The full name of the asset. Example: &#x60;//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1&#x60; See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. | [optional] 
**asset_type** | **str** | The type of the asset. Example: &#x60;compute.googleapis.com/Disk&#x60; See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1p7beta1_related_asset import GoogleCloudAssetV1p7beta1RelatedAsset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1p7beta1RelatedAsset from a JSON string
google_cloud_asset_v1p7beta1_related_asset_instance = GoogleCloudAssetV1p7beta1RelatedAsset.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1p7beta1RelatedAsset.to_json())

# convert the object into a dict
google_cloud_asset_v1p7beta1_related_asset_dict = google_cloud_asset_v1p7beta1_related_asset_instance.to_dict()
# create an instance of GoogleCloudAssetV1p7beta1RelatedAsset from a dict
google_cloud_asset_v1p7beta1_related_asset_from_dict = GoogleCloudAssetV1p7beta1RelatedAsset.from_dict(google_cloud_asset_v1p7beta1_related_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


