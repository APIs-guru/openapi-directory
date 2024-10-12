# GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter

Launch Flex Template parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_spec_gcs_path** | **str** | Cloud Storage path to a file with a JSON-serialized ContainerSpec as content. | [optional] 
**environment** | [**GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment**](GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment.md) |  | [optional] 
**job_name** | **str** | Required. The job name to use for the created job. For an update job request, the job name should be the same as the existing running job. | [optional] 
**launch_options** | **Dict[str, str]** | Launch options for this Flex Template job. This is a common set of options across languages and templates. This should not be used to pass job parameters. | [optional] 
**parameters** | **Dict[str, str]** | The parameters for the Flex Template. Example: &#x60;{\&quot;num_workers\&quot;:\&quot;5\&quot;}&#x60; | [optional] 
**transform_name_mappings** | **Dict[str, str]** | Use this to pass transform name mappings for streaming update jobs. Example: &#x60;{\&quot;oldTransformName\&quot;:\&quot;newTransformName\&quot;,...}&#x60; | [optional] 
**update** | **bool** | Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datapipelines_v1_launch_flex_template_parameter import GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter from a JSON string
google_cloud_datapipelines_v1_launch_flex_template_parameter_instance = GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter.to_json())

# convert the object into a dict
google_cloud_datapipelines_v1_launch_flex_template_parameter_dict = google_cloud_datapipelines_v1_launch_flex_template_parameter_instance.to_dict()
# create an instance of GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter from a dict
google_cloud_datapipelines_v1_launch_flex_template_parameter_from_dict = GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter.from_dict(google_cloud_datapipelines_v1_launch_flex_template_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


