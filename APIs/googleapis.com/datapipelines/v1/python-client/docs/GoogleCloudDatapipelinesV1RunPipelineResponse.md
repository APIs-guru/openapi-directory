# GoogleCloudDatapipelinesV1RunPipelineResponse

Response message for RunPipeline

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job** | [**GoogleCloudDatapipelinesV1Job**](GoogleCloudDatapipelinesV1Job.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datapipelines_v1_run_pipeline_response import GoogleCloudDatapipelinesV1RunPipelineResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatapipelinesV1RunPipelineResponse from a JSON string
google_cloud_datapipelines_v1_run_pipeline_response_instance = GoogleCloudDatapipelinesV1RunPipelineResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatapipelinesV1RunPipelineResponse.to_json())

# convert the object into a dict
google_cloud_datapipelines_v1_run_pipeline_response_dict = google_cloud_datapipelines_v1_run_pipeline_response_instance.to_dict()
# create an instance of GoogleCloudDatapipelinesV1RunPipelineResponse from a dict
google_cloud_datapipelines_v1_run_pipeline_response_from_dict = GoogleCloudDatapipelinesV1RunPipelineResponse.from_dict(google_cloud_datapipelines_v1_run_pipeline_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


