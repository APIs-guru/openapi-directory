# GoogleCloudDatalabelingV1beta1EvaluationJobConfig

Configures specific details of how a continuous evaluation job works. Provide this configuration when you create an EvaluationJob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_import_keys** | **Dict[str, str]** | Required. Prediction keys that tell Data Labeling Service where to find the data for evaluation in your BigQuery table. When the service samples prediction input and output from your model version and saves it to BigQuery, the data gets stored as JSON strings in the BigQuery table. These keys tell Data Labeling Service how to parse the JSON. You can provide the following entries in this field: * &#x60;data_json_key&#x60;: the data key for prediction input. You must provide either this key or &#x60;reference_json_key&#x60;. * &#x60;reference_json_key&#x60;: the data reference key for prediction input. You must provide either this key or &#x60;data_json_key&#x60;. * &#x60;label_json_key&#x60;: the label key for prediction output. Required. * &#x60;label_score_json_key&#x60;: the score key for prediction output. Required. * &#x60;bounding_box_json_key&#x60;: the bounding box key for prediction output. Required if your model version perform image object detection. Learn [how to configure prediction keys](/ml-engine/docs/continuous-evaluation/create-job#prediction-keys). | [optional] 
**bounding_poly_config** | [**GoogleCloudDatalabelingV1beta1BoundingPolyConfig**](GoogleCloudDatalabelingV1beta1BoundingPolyConfig.md) |  | [optional] 
**evaluation_config** | [**GoogleCloudDatalabelingV1beta1EvaluationConfig**](GoogleCloudDatalabelingV1beta1EvaluationConfig.md) |  | [optional] 
**evaluation_job_alert_config** | [**GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig**](GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig.md) |  | [optional] 
**example_count** | **int** | Required. The maximum number of predictions to sample and save to BigQuery during each evaluation interval. This limit overrides &#x60;example_sample_percentage&#x60;: even if the service has not sampled enough predictions to fulfill &#x60;example_sample_perecentage&#x60; during an interval, it stops sampling predictions when it meets this limit. | [optional] 
**example_sample_percentage** | **float** | Required. Fraction of predictions to sample and save to BigQuery during each evaluation interval. For example, 0.1 means 10% of predictions served by your model version get saved to BigQuery. | [optional] 
**human_annotation_config** | [**GoogleCloudDatalabelingV1beta1HumanAnnotationConfig**](GoogleCloudDatalabelingV1beta1HumanAnnotationConfig.md) |  | [optional] 
**image_classification_config** | [**GoogleCloudDatalabelingV1beta1ImageClassificationConfig**](GoogleCloudDatalabelingV1beta1ImageClassificationConfig.md) |  | [optional] 
**input_config** | [**GoogleCloudDatalabelingV1beta1InputConfig**](GoogleCloudDatalabelingV1beta1InputConfig.md) |  | [optional] 
**text_classification_config** | [**GoogleCloudDatalabelingV1beta1TextClassificationConfig**](GoogleCloudDatalabelingV1beta1TextClassificationConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_evaluation_job_config import GoogleCloudDatalabelingV1beta1EvaluationJobConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1EvaluationJobConfig from a JSON string
google_cloud_datalabeling_v1beta1_evaluation_job_config_instance = GoogleCloudDatalabelingV1beta1EvaluationJobConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1EvaluationJobConfig.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_evaluation_job_config_dict = google_cloud_datalabeling_v1beta1_evaluation_job_config_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1EvaluationJobConfig from a dict
google_cloud_datalabeling_v1beta1_evaluation_job_config_from_dict = GoogleCloudDatalabelingV1beta1EvaluationJobConfig.from_dict(google_cloud_datalabeling_v1beta1_evaluation_job_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


