# TemplateArtifactProperties

Properties of a Resource Manager template blueprint artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**Dict[str, ParameterValue]**](ParameterValue.md) | A dictionary for parameters and their corresponding values. | 
**resource_group** | **str** | If applicable, the name of the resource group placeholder to which the Resource Manager template blueprint artifact will be deployed. | [optional] 
**template** | **object** | The Resource Manager template blueprint artifact body. | 
**description** | **str** | Multi-line explain this resource. | [optional] 
**display_name** | **str** | One-liner string explain this resource. | [optional] 
**depends_on** | **List[str]** | Artifacts which need to be deployed before the specified artifact. | [optional] 

## Example

```python
from openapi_client.models.template_artifact_properties import TemplateArtifactProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateArtifactProperties from a JSON string
template_artifact_properties_instance = TemplateArtifactProperties.from_json(json)
# print the JSON string representation of the object
print(TemplateArtifactProperties.to_json())

# convert the object into a dict
template_artifact_properties_dict = template_artifact_properties_instance.to_dict()
# create an instance of TemplateArtifactProperties from a dict
template_artifact_properties_from_dict = TemplateArtifactProperties.from_dict(template_artifact_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


