# GoogleCloudAiplatformV1beta1BatchPredictionJobInputConfig

Configures the input to BatchPredictionJob. See Model.supported_input_storage_formats for Model's supported input formats, and how instances should be expressed via any of them.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_source** | [**GoogleCloudAiplatformV1beta1BigQuerySource**](GoogleCloudAiplatformV1beta1BigQuerySource.md) |  | [optional] 
**gcs_source** | [**GoogleCloudAiplatformV1beta1GcsSource**](GoogleCloudAiplatformV1beta1GcsSource.md) |  | [optional] 
**instances_format** | **str** | Required. The format in which instances are given, must be one of the Model&#39;s supported_input_storage_formats. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_batch_prediction_job_input_config import GoogleCloudAiplatformV1beta1BatchPredictionJobInputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1BatchPredictionJobInputConfig from a JSON string
google_cloud_aiplatform_v1beta1_batch_prediction_job_input_config_instance = GoogleCloudAiplatformV1beta1BatchPredictionJobInputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1BatchPredictionJobInputConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_batch_prediction_job_input_config_dict = google_cloud_aiplatform_v1beta1_batch_prediction_job_input_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1BatchPredictionJobInputConfig from a dict
google_cloud_aiplatform_v1beta1_batch_prediction_job_input_config_from_dict = GoogleCloudAiplatformV1beta1BatchPredictionJobInputConfig.from_dict(google_cloud_aiplatform_v1beta1_batch_prediction_job_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


