# PipelineTemplateDefinitionListResult

Result of a request to list all pipeline template definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of pipeline template definitions, if there are any. | [optional] 
**value** | [**List[PipelineTemplateDefinition]**](PipelineTemplateDefinition.md) | List of pipeline template definitions. | [optional] 

## Example

```python
from openapi_client.models.pipeline_template_definition_list_result import PipelineTemplateDefinitionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineTemplateDefinitionListResult from a JSON string
pipeline_template_definition_list_result_instance = PipelineTemplateDefinitionListResult.from_json(json)
# print the JSON string representation of the object
print(PipelineTemplateDefinitionListResult.to_json())

# convert the object into a dict
pipeline_template_definition_list_result_dict = pipeline_template_definition_list_result_instance.to_dict()
# create an instance of PipelineTemplateDefinitionListResult from a dict
pipeline_template_definition_list_result_from_dict = PipelineTemplateDefinitionListResult.from_dict(pipeline_template_definition_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


