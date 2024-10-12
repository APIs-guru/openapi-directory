# GoogleCloudAiplatformV1BatchPredictionJobOutputConfig

Configures the output of BatchPredictionJob. See Model.supported_output_storage_formats for supported output formats, and how predictions are expressed via any of them.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_destination** | [**GoogleCloudAiplatformV1BigQueryDestination**](GoogleCloudAiplatformV1BigQueryDestination.md) |  | [optional] 
**gcs_destination** | [**GoogleCloudAiplatformV1GcsDestination**](GoogleCloudAiplatformV1GcsDestination.md) |  | [optional] 
**predictions_format** | **str** | Required. The format in which Vertex AI gives the predictions, must be one of the Model&#39;s supported_output_storage_formats. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_batch_prediction_job_output_config import GoogleCloudAiplatformV1BatchPredictionJobOutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1BatchPredictionJobOutputConfig from a JSON string
google_cloud_aiplatform_v1_batch_prediction_job_output_config_instance = GoogleCloudAiplatformV1BatchPredictionJobOutputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1BatchPredictionJobOutputConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_batch_prediction_job_output_config_dict = google_cloud_aiplatform_v1_batch_prediction_job_output_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1BatchPredictionJobOutputConfig from a dict
google_cloud_aiplatform_v1_batch_prediction_job_output_config_from_dict = GoogleCloudAiplatformV1BatchPredictionJobOutputConfig.from_dict(google_cloud_aiplatform_v1_batch_prediction_job_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


