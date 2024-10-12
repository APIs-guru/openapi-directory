# GoogleCloudDatalabelingV1beta1EvaluationJob

Defines an evaluation job that runs periodically to generate Evaluations. [Creating an evaluation job](/ml-engine/docs/continuous-evaluation/create-job) is the starting point for using continuous evaluation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_set** | **str** | Required. Name of the AnnotationSpecSet describing all the labels that your machine learning model outputs. You must create this resource before you create an evaluation job and provide its name in the following format: \&quot;projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}\&quot; | [optional] 
**attempts** | [**List[GoogleCloudDatalabelingV1beta1Attempt]**](GoogleCloudDatalabelingV1beta1Attempt.md) | Output only. Every time the evaluation job runs and an error occurs, the failed attempt is appended to this array. | [optional] 
**create_time** | **str** | Output only. Timestamp of when this evaluation job was created. | [optional] 
**description** | **str** | Required. Description of the job. The description can be up to 25,000 characters long. | [optional] 
**evaluation_job_config** | [**GoogleCloudDatalabelingV1beta1EvaluationJobConfig**](GoogleCloudDatalabelingV1beta1EvaluationJobConfig.md) |  | [optional] 
**label_missing_ground_truth** | **bool** | Required. Whether you want Data Labeling Service to provide ground truth labels for prediction input. If you want the service to assign human labelers to annotate your data, set this to &#x60;true&#x60;. If you want to provide your own ground truth labels in the evaluation job&#39;s BigQuery table, set this to &#x60;false&#x60;. | [optional] 
**model_version** | **str** | Required. The [AI Platform Prediction model version](/ml-engine/docs/prediction-overview) to be evaluated. Prediction input and output is sampled from this model version. When creating an evaluation job, specify the model version in the following format: \&quot;projects/{project_id}/models/{model_name}/versions/{version_name}\&quot; There can only be one evaluation job per model version. | [optional] 
**name** | **str** | Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: \&quot;projects/{project_id}/evaluationJobs/ {evaluation_job_id}\&quot; | [optional] 
**schedule** | **str** | Required. Describes the interval at which the job runs. This interval must be at least 1 day, and it is rounded to the nearest day. For example, if you specify a 50-hour interval, the job runs every 2 days. You can provide the schedule in [crontab format](/scheduler/docs/configuring/cron-job-schedules) or in an [English-like format](/appengine/docs/standard/python/config/cronref#schedule_format). Regardless of what you specify, the job will run at 10:00 AM UTC. Only the interval from this schedule is used, not the specific time of day. | [optional] 
**state** | **str** | Output only. Describes the current state of the job. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_evaluation_job import GoogleCloudDatalabelingV1beta1EvaluationJob

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1EvaluationJob from a JSON string
google_cloud_datalabeling_v1beta1_evaluation_job_instance = GoogleCloudDatalabelingV1beta1EvaluationJob.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1EvaluationJob.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_evaluation_job_dict = google_cloud_datalabeling_v1beta1_evaluation_job_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1EvaluationJob from a dict
google_cloud_datalabeling_v1beta1_evaluation_job_from_dict = GoogleCloudDatalabelingV1beta1EvaluationJob.from_dict(google_cloud_datalabeling_v1beta1_evaluation_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


