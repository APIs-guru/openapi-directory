# PipelineTemplate

Defines a pipeline template resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the pipeline which this template enables. | [optional] 
**id** | **str** | Unique id of pipeline template. | 
**inputs** | [**List[InputDescriptor]**](InputDescriptor.md) | Inputs required by this template to create pipeline. | [optional] 

## Example

```python
from openapi_client.models.pipeline_template import PipelineTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineTemplate from a JSON string
pipeline_template_instance = PipelineTemplate.from_json(json)
# print the JSON string representation of the object
print(PipelineTemplate.to_json())

# convert the object into a dict
pipeline_template_dict = pipeline_template_instance.to_dict()
# create an instance of PipelineTemplate from a dict
pipeline_template_from_dict = PipelineTemplate.from_dict(pipeline_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


