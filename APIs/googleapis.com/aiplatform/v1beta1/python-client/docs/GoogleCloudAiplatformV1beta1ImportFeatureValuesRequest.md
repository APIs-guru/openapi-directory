# GoogleCloudAiplatformV1beta1ImportFeatureValuesRequest

Request message for FeaturestoreService.ImportFeatureValues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avro_source** | [**GoogleCloudAiplatformV1beta1AvroSource**](GoogleCloudAiplatformV1beta1AvroSource.md) |  | [optional] 
**bigquery_source** | [**GoogleCloudAiplatformV1beta1BigQuerySource**](GoogleCloudAiplatformV1beta1BigQuerySource.md) |  | [optional] 
**csv_source** | [**GoogleCloudAiplatformV1beta1CsvSource**](GoogleCloudAiplatformV1beta1CsvSource.md) |  | [optional] 
**disable_ingestion_analysis** | **bool** | If true, API doesn&#39;t start ingestion analysis pipeline. | [optional] 
**disable_online_serving** | **bool** | If set, data will not be imported for online serving. This is typically used for backfilling, where Feature generation timestamps are not in the timestamp range needed for online serving. | [optional] 
**entity_id_field** | **str** | Source column that holds entity IDs. If not provided, entity IDs are extracted from the column named entity_id. | [optional] 
**feature_specs** | [**List[GoogleCloudAiplatformV1beta1ImportFeatureValuesRequestFeatureSpec]**](GoogleCloudAiplatformV1beta1ImportFeatureValuesRequestFeatureSpec.md) | Required. Specifications defining which Feature values to import from the entity. The request fails if no feature_specs are provided, and having multiple feature_specs for one Feature is not allowed. | [optional] 
**feature_time** | **str** | Single Feature timestamp for all entities being imported. The timestamp must not have higher than millisecond precision. | [optional] 
**feature_time_field** | **str** | Source column that holds the Feature timestamp for all Feature values in each entity. | [optional] 
**worker_count** | **int** | Specifies the number of workers that are used to write data to the Featurestore. Consider the online serving capacity that you require to achieve the desired import throughput without interfering with online serving. The value must be positive, and less than or equal to 100. If not set, defaults to using 1 worker. The low count ensures minimal impact on online serving performance. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_import_feature_values_request import GoogleCloudAiplatformV1beta1ImportFeatureValuesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ImportFeatureValuesRequest from a JSON string
google_cloud_aiplatform_v1beta1_import_feature_values_request_instance = GoogleCloudAiplatformV1beta1ImportFeatureValuesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ImportFeatureValuesRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_import_feature_values_request_dict = google_cloud_aiplatform_v1beta1_import_feature_values_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ImportFeatureValuesRequest from a dict
google_cloud_aiplatform_v1beta1_import_feature_values_request_from_dict = GoogleCloudAiplatformV1beta1ImportFeatureValuesRequest.from_dict(google_cloud_aiplatform_v1beta1_import_feature_values_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


