# GoogleCloudAiplatformV1BatchPredictionJobOutputInfo

Further describes this job's output. Supplements output_config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_output_dataset** | **str** | Output only. The path of the BigQuery dataset created, in &#x60;bq://projectId.bqDatasetId&#x60; format, into which the prediction output is written. | [optional] [readonly] 
**bigquery_output_table** | **str** | Output only. The name of the BigQuery table created, in &#x60;predictions_&#x60; format, into which the prediction output is written. Can be used by UI to generate the BigQuery output path, for example. | [optional] [readonly] 
**gcs_output_directory** | **str** | Output only. The full path of the Cloud Storage directory created, into which the prediction output is written. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_batch_prediction_job_output_info import GoogleCloudAiplatformV1BatchPredictionJobOutputInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1BatchPredictionJobOutputInfo from a JSON string
google_cloud_aiplatform_v1_batch_prediction_job_output_info_instance = GoogleCloudAiplatformV1BatchPredictionJobOutputInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1BatchPredictionJobOutputInfo.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_batch_prediction_job_output_info_dict = google_cloud_aiplatform_v1_batch_prediction_job_output_info_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1BatchPredictionJobOutputInfo from a dict
google_cloud_aiplatform_v1_batch_prediction_job_output_info_from_dict = GoogleCloudAiplatformV1BatchPredictionJobOutputInfo.from_dict(google_cloud_aiplatform_v1_batch_prediction_job_output_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


