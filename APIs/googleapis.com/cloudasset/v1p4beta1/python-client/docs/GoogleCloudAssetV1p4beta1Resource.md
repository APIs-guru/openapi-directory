# GoogleCloudAssetV1p4beta1Resource

A Google Cloud resource under analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_state** | [**GoogleCloudAssetV1p4beta1AnalysisState**](GoogleCloudAssetV1p4beta1AnalysisState.md) |  | [optional] 
**full_resource_name** | **str** | The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1p4beta1_resource import GoogleCloudAssetV1p4beta1Resource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1p4beta1Resource from a JSON string
google_cloud_asset_v1p4beta1_resource_instance = GoogleCloudAssetV1p4beta1Resource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1p4beta1Resource.to_json())

# convert the object into a dict
google_cloud_asset_v1p4beta1_resource_dict = google_cloud_asset_v1p4beta1_resource_instance.to_dict()
# create an instance of GoogleCloudAssetV1p4beta1Resource from a dict
google_cloud_asset_v1p4beta1_resource_from_dict = GoogleCloudAssetV1p4beta1Resource.from_dict(google_cloud_asset_v1p4beta1_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


