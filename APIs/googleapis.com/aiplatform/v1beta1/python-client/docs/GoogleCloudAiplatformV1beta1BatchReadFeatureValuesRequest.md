# GoogleCloudAiplatformV1beta1BatchReadFeatureValuesRequest

Request message for FeaturestoreService.BatchReadFeatureValues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_read_instances** | [**GoogleCloudAiplatformV1beta1BigQuerySource**](GoogleCloudAiplatformV1beta1BigQuerySource.md) |  | [optional] 
**csv_read_instances** | [**GoogleCloudAiplatformV1beta1CsvSource**](GoogleCloudAiplatformV1beta1CsvSource.md) |  | [optional] 
**destination** | [**GoogleCloudAiplatformV1beta1FeatureValueDestination**](GoogleCloudAiplatformV1beta1FeatureValueDestination.md) |  | [optional] 
**entity_type_specs** | [**List[GoogleCloudAiplatformV1beta1BatchReadFeatureValuesRequestEntityTypeSpec]**](GoogleCloudAiplatformV1beta1BatchReadFeatureValuesRequestEntityTypeSpec.md) | Required. Specifies EntityType grouping Features to read values of and settings. | [optional] 
**pass_through_fields** | [**List[GoogleCloudAiplatformV1beta1BatchReadFeatureValuesRequestPassThroughField]**](GoogleCloudAiplatformV1beta1BatchReadFeatureValuesRequestPassThroughField.md) | When not empty, the specified fields in the *_read_instances source will be joined as-is in the output, in addition to those fields from the Featurestore Entity. For BigQuery source, the type of the pass-through values will be automatically inferred. For CSV source, the pass-through values will be passed as opaque bytes. | [optional] 
**start_time** | **str** | Optional. Excludes Feature values with feature generation timestamp before this timestamp. If not set, retrieve oldest values kept in Feature Store. Timestamp, if present, must not have higher than millisecond precision. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_batch_read_feature_values_request import GoogleCloudAiplatformV1beta1BatchReadFeatureValuesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1BatchReadFeatureValuesRequest from a JSON string
google_cloud_aiplatform_v1beta1_batch_read_feature_values_request_instance = GoogleCloudAiplatformV1beta1BatchReadFeatureValuesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1BatchReadFeatureValuesRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_batch_read_feature_values_request_dict = google_cloud_aiplatform_v1beta1_batch_read_feature_values_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1BatchReadFeatureValuesRequest from a dict
google_cloud_aiplatform_v1beta1_batch_read_feature_values_request_from_dict = GoogleCloudAiplatformV1beta1BatchReadFeatureValuesRequest.from_dict(google_cloud_aiplatform_v1beta1_batch_read_feature_values_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


