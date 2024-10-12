# GoogleCloudAiplatformV1beta1ImportFeatureValuesResponse

Response message for FeaturestoreService.ImportFeatureValues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**imported_entity_count** | **str** | Number of entities that have been imported by the operation. | [optional] 
**imported_feature_value_count** | **str** | Number of Feature values that have been imported by the operation. | [optional] 
**invalid_row_count** | **str** | The number of rows in input source that weren&#39;t imported due to either * Not having any featureValues. * Having a null entityId. * Having a null timestamp. * Not being parsable (applicable for CSV sources). | [optional] 
**timestamp_outside_retention_rows_count** | **str** | The number rows that weren&#39;t ingested due to having feature timestamps outside the retention boundary. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_import_feature_values_response import GoogleCloudAiplatformV1beta1ImportFeatureValuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ImportFeatureValuesResponse from a JSON string
google_cloud_aiplatform_v1beta1_import_feature_values_response_instance = GoogleCloudAiplatformV1beta1ImportFeatureValuesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ImportFeatureValuesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_import_feature_values_response_dict = google_cloud_aiplatform_v1beta1_import_feature_values_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ImportFeatureValuesResponse from a dict
google_cloud_aiplatform_v1beta1_import_feature_values_response_from_dict = GoogleCloudAiplatformV1beta1ImportFeatureValuesResponse.from_dict(google_cloud_aiplatform_v1beta1_import_feature_values_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


