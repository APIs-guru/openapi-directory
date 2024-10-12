# GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest

A request to launch a Dataflow job from a Flex Template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**launch_parameter** | [**GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter**](GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter.md) |  | [optional] 
**location** | **str** | Required. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. For example, &#x60;us-central1&#x60;, &#x60;us-west1&#x60;. | [optional] 
**project_id** | **str** | Required. The ID of the Cloud Platform project that the job belongs to. | [optional] 
**validate_only** | **bool** | If true, the request is validated but not actually executed. Defaults to false. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datapipelines_v1_launch_flex_template_request import GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest from a JSON string
google_cloud_datapipelines_v1_launch_flex_template_request_instance = GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest.to_json())

# convert the object into a dict
google_cloud_datapipelines_v1_launch_flex_template_request_dict = google_cloud_datapipelines_v1_launch_flex_template_request_instance.to_dict()
# create an instance of GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest from a dict
google_cloud_datapipelines_v1_launch_flex_template_request_from_dict = GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest.from_dict(google_cloud_datapipelines_v1_launch_flex_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


