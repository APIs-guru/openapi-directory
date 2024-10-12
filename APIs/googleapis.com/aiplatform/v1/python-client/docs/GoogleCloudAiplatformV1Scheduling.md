# GoogleCloudAiplatformV1Scheduling

All parameters related to queuing and scheduling of custom jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_retries** | **bool** | Optional. Indicates if the job should retry for internal errors after the job starts running. If true, overrides &#x60;Scheduling.restart_job_on_worker_restart&#x60; to false. | [optional] 
**restart_job_on_worker_restart** | **bool** | Restarts the entire CustomJob if a worker gets restarted. This feature can be used by distributed training jobs that are not resilient to workers leaving and joining a job. | [optional] 
**timeout** | **str** | The maximum job running time. The default is 7 days. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_scheduling import GoogleCloudAiplatformV1Scheduling

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1Scheduling from a JSON string
google_cloud_aiplatform_v1_scheduling_instance = GoogleCloudAiplatformV1Scheduling.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1Scheduling.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_scheduling_dict = google_cloud_aiplatform_v1_scheduling_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1Scheduling from a dict
google_cloud_aiplatform_v1_scheduling_from_dict = GoogleCloudAiplatformV1Scheduling.from_dict(google_cloud_aiplatform_v1_scheduling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


