# ProjectResourceProperties

Defines the custom properties of project resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bootstrap_pipeline_template** | [**PipelineTemplateLegacy**](PipelineTemplateLegacy.md) |  | [optional] 
**owner_upn** | **str** | Optional UPN of the owner, on-behalf-of whom the project is being created. | [optional] 
**pipeline_bootstrap_configurations** | [**List[PipelineBootstrapConfiguration]**](PipelineBootstrapConfiguration.md) | Bootstrap configuration for pipelines in Team Project. | [optional] 
**process_template_id** | **str** | Process template to use in the project. | [optional] 
**tfs_unique_identifier** | **str** | Unique identifier of the VSTS project. | [optional] [readonly] 
**version_control_option** | **str** | Version control to use for the default repo created in the project. | [optional] 

## Example

```python
from openapi_client.models.project_resource_properties import ProjectResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectResourceProperties from a JSON string
project_resource_properties_instance = ProjectResourceProperties.from_json(json)
# print the JSON string representation of the object
print(ProjectResourceProperties.to_json())

# convert the object into a dict
project_resource_properties_dict = project_resource_properties_instance.to_dict()
# create an instance of ProjectResourceProperties from a dict
project_resource_properties_from_dict = ProjectResourceProperties.from_dict(project_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


