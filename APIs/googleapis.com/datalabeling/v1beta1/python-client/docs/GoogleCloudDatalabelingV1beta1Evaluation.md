# GoogleCloudDatalabelingV1beta1Evaluation

Describes an evaluation between a machine learning model's predictions and ground truth labels. Created when an EvaluationJob runs successfully.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_type** | **str** | Output only. Type of task that the model version being evaluated performs, as defined in the evaluationJobConfig.inputConfig.annotationType field of the evaluation job that created this evaluation. | [optional] 
**config** | [**GoogleCloudDatalabelingV1beta1EvaluationConfig**](GoogleCloudDatalabelingV1beta1EvaluationConfig.md) |  | [optional] 
**create_time** | **str** | Output only. Timestamp for when this evaluation was created. | [optional] 
**evaluated_item_count** | **str** | Output only. The number of items in the ground truth dataset that were used for this evaluation. Only populated when the evaulation is for certain AnnotationTypes. | [optional] 
**evaluation_job_run_time** | **str** | Output only. Timestamp for when the evaluation job that created this evaluation ran. | [optional] 
**evaluation_metrics** | [**GoogleCloudDatalabelingV1beta1EvaluationMetrics**](GoogleCloudDatalabelingV1beta1EvaluationMetrics.md) |  | [optional] 
**name** | **str** | Output only. Resource name of an evaluation. The name has the following format: \&quot;projects/{project_id}/datasets/{dataset_id}/evaluations/ {evaluation_id}&#39; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_evaluation import GoogleCloudDatalabelingV1beta1Evaluation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1Evaluation from a JSON string
google_cloud_datalabeling_v1beta1_evaluation_instance = GoogleCloudDatalabelingV1beta1Evaluation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1Evaluation.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_evaluation_dict = google_cloud_datalabeling_v1beta1_evaluation_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1Evaluation from a dict
google_cloud_datalabeling_v1beta1_evaluation_from_dict = GoogleCloudDatalabelingV1beta1Evaluation.from_dict(google_cloud_datalabeling_v1beta1_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


