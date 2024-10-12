# GoogleCloudDatapipelinesV1LaunchTemplateRequest

A request to launch a template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_path** | **str** | A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with &#39;gs://&#39;. | [optional] 
**launch_parameters** | [**GoogleCloudDatapipelinesV1LaunchTemplateParameters**](GoogleCloudDatapipelinesV1LaunchTemplateParameters.md) |  | [optional] 
**location** | **str** | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. | [optional] 
**project_id** | **str** | Required. The ID of the Cloud Platform project that the job belongs to. | [optional] 
**validate_only** | **bool** | If true, the request is validated but not actually executed. Defaults to false. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datapipelines_v1_launch_template_request import GoogleCloudDatapipelinesV1LaunchTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatapipelinesV1LaunchTemplateRequest from a JSON string
google_cloud_datapipelines_v1_launch_template_request_instance = GoogleCloudDatapipelinesV1LaunchTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatapipelinesV1LaunchTemplateRequest.to_json())

# convert the object into a dict
google_cloud_datapipelines_v1_launch_template_request_dict = google_cloud_datapipelines_v1_launch_template_request_instance.to_dict()
# create an instance of GoogleCloudDatapipelinesV1LaunchTemplateRequest from a dict
google_cloud_datapipelines_v1_launch_template_request_from_dict = GoogleCloudDatapipelinesV1LaunchTemplateRequest.from_dict(google_cloud_datapipelines_v1_launch_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


