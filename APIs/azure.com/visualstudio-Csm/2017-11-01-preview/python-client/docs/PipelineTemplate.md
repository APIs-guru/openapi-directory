# PipelineTemplate

Defines a VSTS pipeline template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_source** | [**ApplicationSource**](ApplicationSource.md) |  | 
**application_target** | [**ApplicationTarget**](ApplicationTarget.md) |  | 
**authorization_details** | [**Dict[str, Authorization]**](Authorization.md) | Global dictionary of authorization details used by the pipeline, with a friendly name as key. Individual resource in the pipeline can reference to a specific authorization info using the friendly name. | 

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


