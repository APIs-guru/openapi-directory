# GoogleCloudAiplatformV1beta1ListHyperparameterTuningJobsResponse

Response message for JobService.ListHyperparameterTuningJobs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hyperparameter_tuning_jobs** | [**List[GoogleCloudAiplatformV1beta1HyperparameterTuningJob]**](GoogleCloudAiplatformV1beta1HyperparameterTuningJob.md) | List of HyperparameterTuningJobs in the requested page. HyperparameterTuningJob.trials of the jobs will be not be returned. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass to ListHyperparameterTuningJobsRequest.page_token to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_hyperparameter_tuning_jobs_response import GoogleCloudAiplatformV1beta1ListHyperparameterTuningJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListHyperparameterTuningJobsResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_hyperparameter_tuning_jobs_response_instance = GoogleCloudAiplatformV1beta1ListHyperparameterTuningJobsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListHyperparameterTuningJobsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_hyperparameter_tuning_jobs_response_dict = google_cloud_aiplatform_v1beta1_list_hyperparameter_tuning_jobs_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListHyperparameterTuningJobsResponse from a dict
google_cloud_aiplatform_v1beta1_list_hyperparameter_tuning_jobs_response_from_dict = GoogleCloudAiplatformV1beta1ListHyperparameterTuningJobsResponse.from_dict(google_cloud_aiplatform_v1beta1_list_hyperparameter_tuning_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


