# GoogleCloudAiplatformV1beta1ExportFeatureValuesRequest

Request message for FeaturestoreService.ExportFeatureValues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**GoogleCloudAiplatformV1beta1FeatureValueDestination**](GoogleCloudAiplatformV1beta1FeatureValueDestination.md) |  | [optional] 
**feature_selector** | [**GoogleCloudAiplatformV1beta1FeatureSelector**](GoogleCloudAiplatformV1beta1FeatureSelector.md) |  | [optional] 
**full_export** | [**GoogleCloudAiplatformV1beta1ExportFeatureValuesRequestFullExport**](GoogleCloudAiplatformV1beta1ExportFeatureValuesRequestFullExport.md) |  | [optional] 
**settings** | [**List[GoogleCloudAiplatformV1beta1DestinationFeatureSetting]**](GoogleCloudAiplatformV1beta1DestinationFeatureSetting.md) | Per-Feature export settings. | [optional] 
**snapshot_export** | [**GoogleCloudAiplatformV1beta1ExportFeatureValuesRequestSnapshotExport**](GoogleCloudAiplatformV1beta1ExportFeatureValuesRequestSnapshotExport.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_export_feature_values_request import GoogleCloudAiplatformV1beta1ExportFeatureValuesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ExportFeatureValuesRequest from a JSON string
google_cloud_aiplatform_v1beta1_export_feature_values_request_instance = GoogleCloudAiplatformV1beta1ExportFeatureValuesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ExportFeatureValuesRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_export_feature_values_request_dict = google_cloud_aiplatform_v1beta1_export_feature_values_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ExportFeatureValuesRequest from a dict
google_cloud_aiplatform_v1beta1_export_feature_values_request_from_dict = GoogleCloudAiplatformV1beta1ExportFeatureValuesRequest.from_dict(google_cloud_aiplatform_v1beta1_export_feature_values_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


