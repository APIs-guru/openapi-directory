# PipelineTemplateDefinition

Definition of a pipeline template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the pipeline enabled by the template. | [optional] 
**id** | **str** | Unique identifier of the pipeline template. | 
**inputs** | [**List[InputDescriptor]**](InputDescriptor.md) | List of input parameters required by the template to create a pipeline. | [optional] 

## Example

```python
from openapi_client.models.pipeline_template_definition import PipelineTemplateDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineTemplateDefinition from a JSON string
pipeline_template_definition_instance = PipelineTemplateDefinition.from_json(json)
# print the JSON string representation of the object
print(PipelineTemplateDefinition.to_json())

# convert the object into a dict
pipeline_template_definition_dict = pipeline_template_definition_instance.to_dict()
# create an instance of PipelineTemplateDefinition from a dict
pipeline_template_definition_from_dict = PipelineTemplateDefinition.from_dict(pipeline_template_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


