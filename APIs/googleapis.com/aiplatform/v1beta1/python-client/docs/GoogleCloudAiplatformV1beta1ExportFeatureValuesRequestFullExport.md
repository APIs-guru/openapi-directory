# GoogleCloudAiplatformV1beta1ExportFeatureValuesRequestFullExport

Describes exporting all historical Feature values of all entities of the EntityType between [start_time, end_time].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | Exports Feature values as of this timestamp. If not set, retrieve values as of now. Timestamp, if present, must not have higher than millisecond precision. | [optional] 
**start_time** | **str** | Excludes Feature values with feature generation timestamp before this timestamp. If not set, retrieve oldest values kept in Feature Store. Timestamp, if present, must not have higher than millisecond precision. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_export_feature_values_request_full_export import GoogleCloudAiplatformV1beta1ExportFeatureValuesRequestFullExport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ExportFeatureValuesRequestFullExport from a JSON string
google_cloud_aiplatform_v1beta1_export_feature_values_request_full_export_instance = GoogleCloudAiplatformV1beta1ExportFeatureValuesRequestFullExport.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ExportFeatureValuesRequestFullExport.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_export_feature_values_request_full_export_dict = google_cloud_aiplatform_v1beta1_export_feature_values_request_full_export_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ExportFeatureValuesRequestFullExport from a dict
google_cloud_aiplatform_v1beta1_export_feature_values_request_full_export_from_dict = GoogleCloudAiplatformV1beta1ExportFeatureValuesRequestFullExport.from_dict(google_cloud_aiplatform_v1beta1_export_feature_values_request_full_export_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


