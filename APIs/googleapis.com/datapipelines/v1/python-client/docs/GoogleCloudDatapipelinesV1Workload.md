# GoogleCloudDatapipelinesV1Workload

Workload details for creating the pipeline jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataflow_flex_template_request** | [**GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest**](GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest.md) |  | [optional] 
**dataflow_launch_template_request** | [**GoogleCloudDatapipelinesV1LaunchTemplateRequest**](GoogleCloudDatapipelinesV1LaunchTemplateRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datapipelines_v1_workload import GoogleCloudDatapipelinesV1Workload

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatapipelinesV1Workload from a JSON string
google_cloud_datapipelines_v1_workload_instance = GoogleCloudDatapipelinesV1Workload.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatapipelinesV1Workload.to_json())

# convert the object into a dict
google_cloud_datapipelines_v1_workload_dict = google_cloud_datapipelines_v1_workload_instance.to_dict()
# create an instance of GoogleCloudDatapipelinesV1Workload from a dict
google_cloud_datapipelines_v1_workload_from_dict = GoogleCloudDatapipelinesV1Workload.from_dict(google_cloud_datapipelines_v1_workload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


