# GoogleCloudAssetV1p7beta1OutputConfig

Output configuration for export assets destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_destination** | [**GoogleCloudAssetV1p7beta1BigQueryDestination**](GoogleCloudAssetV1p7beta1BigQueryDestination.md) |  | [optional] 
**gcs_destination** | [**GoogleCloudAssetV1p7beta1GcsDestination**](GoogleCloudAssetV1p7beta1GcsDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1p7beta1_output_config import GoogleCloudAssetV1p7beta1OutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1p7beta1OutputConfig from a JSON string
google_cloud_asset_v1p7beta1_output_config_instance = GoogleCloudAssetV1p7beta1OutputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1p7beta1OutputConfig.to_json())

# convert the object into a dict
google_cloud_asset_v1p7beta1_output_config_dict = google_cloud_asset_v1p7beta1_output_config_instance.to_dict()
# create an instance of GoogleCloudAssetV1p7beta1OutputConfig from a dict
google_cloud_asset_v1p7beta1_output_config_from_dict = GoogleCloudAssetV1p7beta1OutputConfig.from_dict(google_cloud_asset_v1p7beta1_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


