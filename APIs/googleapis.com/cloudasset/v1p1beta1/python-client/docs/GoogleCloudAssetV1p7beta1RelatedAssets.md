# GoogleCloudAssetV1p7beta1RelatedAssets

The detailed related assets with the `relationship_type`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[GoogleCloudAssetV1p7beta1RelatedAsset]**](GoogleCloudAssetV1p7beta1RelatedAsset.md) | The peer resources of the relationship. | [optional] 
**relationship_attributes** | [**GoogleCloudAssetV1p7beta1RelationshipAttributes**](GoogleCloudAssetV1p7beta1RelationshipAttributes.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1p7beta1_related_assets import GoogleCloudAssetV1p7beta1RelatedAssets

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1p7beta1RelatedAssets from a JSON string
google_cloud_asset_v1p7beta1_related_assets_instance = GoogleCloudAssetV1p7beta1RelatedAssets.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1p7beta1RelatedAssets.to_json())

# convert the object into a dict
google_cloud_asset_v1p7beta1_related_assets_dict = google_cloud_asset_v1p7beta1_related_assets_instance.to_dict()
# create an instance of GoogleCloudAssetV1p7beta1RelatedAssets from a dict
google_cloud_asset_v1p7beta1_related_assets_from_dict = GoogleCloudAssetV1p7beta1RelatedAssets.from_dict(google_cloud_asset_v1p7beta1_related_assets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


