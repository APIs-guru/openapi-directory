# LaunchTemplateParameters

Parameters to provide to the template being launched. Note that the [metadata in the pipeline code] (https://cloud.google.com/dataflow/docs/guides/templates/creating-templates#metadata) determines which runtime parameters are valid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | [**RuntimeEnvironment**](RuntimeEnvironment.md) |  | [optional] 
**job_name** | **str** | Required. The job name to use for the created job. The name must match the regular expression &#x60;[a-z]([-a-z0-9]{0,1022}[a-z0-9])?&#x60; | [optional] 
**parameters** | **Dict[str, str]** | The runtime parameters to pass to the job. | [optional] 
**transform_name_mapping** | **Dict[str, str]** | Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. | [optional] 
**update** | **bool** | If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state. | [optional] 

## Example

```python
from openapi_client.models.launch_template_parameters import LaunchTemplateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of LaunchTemplateParameters from a JSON string
launch_template_parameters_instance = LaunchTemplateParameters.from_json(json)
# print the JSON string representation of the object
print(LaunchTemplateParameters.to_json())

# convert the object into a dict
launch_template_parameters_dict = launch_template_parameters_instance.to_dict()
# create an instance of LaunchTemplateParameters from a dict
launch_template_parameters_from_dict = LaunchTemplateParameters.from_dict(launch_template_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


