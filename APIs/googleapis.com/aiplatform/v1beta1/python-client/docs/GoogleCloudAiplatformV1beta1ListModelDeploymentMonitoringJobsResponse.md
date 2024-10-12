# GoogleCloudAiplatformV1beta1ListModelDeploymentMonitoringJobsResponse

Response message for JobService.ListModelDeploymentMonitoringJobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_deployment_monitoring_jobs** | [**List[GoogleCloudAiplatformV1beta1ModelDeploymentMonitoringJob]**](GoogleCloudAiplatformV1beta1ModelDeploymentMonitoringJob.md) | A list of ModelDeploymentMonitoringJobs that matches the specified filter in the request. | [optional] 
**next_page_token** | **str** | The standard List next-page token. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_model_deployment_monitoring_jobs_response import GoogleCloudAiplatformV1beta1ListModelDeploymentMonitoringJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListModelDeploymentMonitoringJobsResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_model_deployment_monitoring_jobs_response_instance = GoogleCloudAiplatformV1beta1ListModelDeploymentMonitoringJobsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListModelDeploymentMonitoringJobsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_model_deployment_monitoring_jobs_response_dict = google_cloud_aiplatform_v1beta1_list_model_deployment_monitoring_jobs_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListModelDeploymentMonitoringJobsResponse from a dict
google_cloud_aiplatform_v1beta1_list_model_deployment_monitoring_jobs_response_from_dict = GoogleCloudAiplatformV1beta1ListModelDeploymentMonitoringJobsResponse.from_dict(google_cloud_aiplatform_v1beta1_list_model_deployment_monitoring_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


