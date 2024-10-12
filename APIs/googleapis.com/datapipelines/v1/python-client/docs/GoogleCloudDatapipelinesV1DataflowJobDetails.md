# GoogleCloudDatapipelinesV1DataflowJobDetails

Pipeline job details specific to the Dataflow API. This is encapsulated here to allow for more executors to store their specific details separately.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_workers** | **int** | Output only. The current number of workers used to run the jobs. Only set to a value if the job is still running. | [optional] [readonly] 
**resource_info** | **Dict[str, float]** | Cached version of all the metrics of interest for the job. This value gets stored here when the job is terminated. As long as the job is running, this field is populated from the Dataflow API. | [optional] 
**sdk_version** | [**GoogleCloudDatapipelinesV1SdkVersion**](GoogleCloudDatapipelinesV1SdkVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datapipelines_v1_dataflow_job_details import GoogleCloudDatapipelinesV1DataflowJobDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatapipelinesV1DataflowJobDetails from a JSON string
google_cloud_datapipelines_v1_dataflow_job_details_instance = GoogleCloudDatapipelinesV1DataflowJobDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatapipelinesV1DataflowJobDetails.to_json())

# convert the object into a dict
google_cloud_datapipelines_v1_dataflow_job_details_dict = google_cloud_datapipelines_v1_dataflow_job_details_instance.to_dict()
# create an instance of GoogleCloudDatapipelinesV1DataflowJobDetails from a dict
google_cloud_datapipelines_v1_dataflow_job_details_from_dict = GoogleCloudDatapipelinesV1DataflowJobDetails.from_dict(google_cloud_datapipelines_v1_dataflow_job_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


