# ProjectResourceUpdateParametersProperties

Custom properties of project resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pipeline_bootstrap_configurations** | [**List[PipelineBootstrapConfiguration]**](PipelineBootstrapConfiguration.md) | Bootstrap configurations for pipelines in Team Project. | [optional] 

## Example

```python
from openapi_client.models.project_resource_update_parameters_properties import ProjectResourceUpdateParametersProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectResourceUpdateParametersProperties from a JSON string
project_resource_update_parameters_properties_instance = ProjectResourceUpdateParametersProperties.from_json(json)
# print the JSON string representation of the object
print(ProjectResourceUpdateParametersProperties.to_json())

# convert the object into a dict
project_resource_update_parameters_properties_dict = project_resource_update_parameters_properties_instance.to_dict()
# create an instance of ProjectResourceUpdateParametersProperties from a dict
project_resource_update_parameters_properties_from_dict = ProjectResourceUpdateParametersProperties.from_dict(project_resource_update_parameters_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


