# PipelineTemplateResourceListResult

The response to pipeline template resource list GET request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[PipelineTemplate]**](PipelineTemplate.md) | Array of resource details. | [optional] 

## Example

```python
from openapi_client.models.pipeline_template_resource_list_result import PipelineTemplateResourceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineTemplateResourceListResult from a JSON string
pipeline_template_resource_list_result_instance = PipelineTemplateResourceListResult.from_json(json)
# print the JSON string representation of the object
print(PipelineTemplateResourceListResult.to_json())

# convert the object into a dict
pipeline_template_resource_list_result_dict = pipeline_template_resource_list_result_instance.to_dict()
# create an instance of PipelineTemplateResourceListResult from a dict
pipeline_template_resource_list_result_from_dict = PipelineTemplateResourceListResult.from_dict(pipeline_template_resource_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


