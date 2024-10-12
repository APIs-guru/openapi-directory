# GoogleCloudDatapipelinesV1Job

Definition of the job information maintained by the pipeline. Fields in this entity are retrieved from the executor API (e.g. Dataflow API).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time of job creation. | [optional] [readonly] 
**dataflow_job_details** | [**GoogleCloudDatapipelinesV1DataflowJobDetails**](GoogleCloudDatapipelinesV1DataflowJobDetails.md) |  | [optional] 
**end_time** | **str** | Output only. The time of job termination. This is absent if the job is still running. | [optional] [readonly] 
**id** | **str** | Output only. The internal ID for the job. | [optional] [readonly] 
**name** | **str** | Required. The fully qualified resource name for the job. | [optional] 
**state** | **str** | The current state of the job. | [optional] 
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datapipelines_v1_job import GoogleCloudDatapipelinesV1Job

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatapipelinesV1Job from a JSON string
google_cloud_datapipelines_v1_job_instance = GoogleCloudDatapipelinesV1Job.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatapipelinesV1Job.to_json())

# convert the object into a dict
google_cloud_datapipelines_v1_job_dict = google_cloud_datapipelines_v1_job_instance.to_dict()
# create an instance of GoogleCloudDatapipelinesV1Job from a dict
google_cloud_datapipelines_v1_job_from_dict = GoogleCloudDatapipelinesV1Job.from_dict(google_cloud_datapipelines_v1_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


