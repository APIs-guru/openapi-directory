# LaunchFlexTemplateParameter

Launch FlexTemplate Parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_spec** | [**ContainerSpec**](ContainerSpec.md) |  | [optional] 
**container_spec_gcs_path** | **str** | Cloud Storage path to a file with json serialized ContainerSpec as content. | [optional] 
**environment** | [**FlexTemplateRuntimeEnvironment**](FlexTemplateRuntimeEnvironment.md) |  | [optional] 
**job_name** | **str** | Required. The job name to use for the created job. For update job request, job name should be same as the existing running job. | [optional] 
**launch_options** | **Dict[str, str]** | Launch options for this flex template job. This is a common set of options across languages and templates. This should not be used to pass job parameters. | [optional] 
**parameters** | **Dict[str, str]** | The parameters for FlexTemplate. Ex. {\&quot;num_workers\&quot;:\&quot;5\&quot;} | [optional] 
**transform_name_mappings** | **Dict[str, str]** | Use this to pass transform_name_mappings for streaming update jobs. Ex:{\&quot;oldTransformName\&quot;:\&quot;newTransformName\&quot;,...}&#39; | [optional] 
**update** | **bool** | Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job. | [optional] 

## Example

```python
from openapi_client.models.launch_flex_template_parameter import LaunchFlexTemplateParameter

# TODO update the JSON string below
json = "{}"
# create an instance of LaunchFlexTemplateParameter from a JSON string
launch_flex_template_parameter_instance = LaunchFlexTemplateParameter.from_json(json)
# print the JSON string representation of the object
print(LaunchFlexTemplateParameter.to_json())

# convert the object into a dict
launch_flex_template_parameter_dict = launch_flex_template_parameter_instance.to_dict()
# create an instance of LaunchFlexTemplateParameter from a dict
launch_flex_template_parameter_from_dict = LaunchFlexTemplateParameter.from_dict(launch_flex_template_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


