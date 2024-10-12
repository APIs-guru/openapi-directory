# GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig

Provides details for how an evaluation job sends email alerts based on the results of a run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Required. An email address to send alerts to. | [optional] 
**min_acceptable_mean_average_precision** | **float** | Required. A number between 0 and 1 that describes a minimum mean average precision threshold. When the evaluation job runs, if it calculates that your model version&#39;s predictions from the recent interval have meanAveragePrecision below this threshold, then it sends an alert to your specified email. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_evaluation_job_alert_config import GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig from a JSON string
google_cloud_datalabeling_v1beta1_evaluation_job_alert_config_instance = GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_evaluation_job_alert_config_dict = google_cloud_datalabeling_v1beta1_evaluation_job_alert_config_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig from a dict
google_cloud_datalabeling_v1beta1_evaluation_job_alert_config_from_dict = GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig.from_dict(google_cloud_datalabeling_v1beta1_evaluation_job_alert_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


