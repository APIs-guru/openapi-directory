# GoogleCloudDataplexV1Job

A job represents an instance of a task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | Output only. The time when the job ended. | [optional] [readonly] 
**execution_spec** | [**GoogleCloudDataplexV1TaskExecutionSpec**](GoogleCloudDataplexV1TaskExecutionSpec.md) |  | [optional] 
**labels** | **Dict[str, str]** | Output only. User-defined labels for the task. | [optional] [readonly] 
**message** | **str** | Output only. Additional information about the current state. | [optional] [readonly] 
**name** | **str** | Output only. The relative resource name of the job, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}/jobs/{job_id}. | [optional] [readonly] 
**retry_count** | **int** | Output only. The number of times the job has been retried (excluding the initial attempt). | [optional] [readonly] 
**service** | **str** | Output only. The underlying service running a job. | [optional] [readonly] 
**service_job** | **str** | Output only. The full resource name for the job run under a particular service. | [optional] [readonly] 
**start_time** | **str** | Output only. The time when the job was started. | [optional] [readonly] 
**state** | **str** | Output only. Execution state for the job. | [optional] [readonly] 
**trigger** | **str** | Output only. Job execution trigger. | [optional] [readonly] 
**uid** | **str** | Output only. System generated globally unique ID for the job. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_job import GoogleCloudDataplexV1Job

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1Job from a JSON string
google_cloud_dataplex_v1_job_instance = GoogleCloudDataplexV1Job.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1Job.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_job_dict = google_cloud_dataplex_v1_job_instance.to_dict()
# create an instance of GoogleCloudDataplexV1Job from a dict
google_cloud_dataplex_v1_job_from_dict = GoogleCloudDataplexV1Job.from_dict(google_cloud_dataplex_v1_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


