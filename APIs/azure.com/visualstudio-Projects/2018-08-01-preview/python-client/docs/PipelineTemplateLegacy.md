# PipelineTemplateLegacy

Defines a VSTS pipeline template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_source** | [**ApplicationSource**](ApplicationSource.md) |  | 
**application_target** | [**ApplicationTarget**](ApplicationTarget.md) |  | 
**authorization_details** | [**Dict[str, Authorization]**](Authorization.md) | Global dictionary of authorization details used by the pipeline, with a friendly name as key. Individual resource in the pipeline can reference to a specific authorization info using the friendly name. | 

## Example

```python
from openapi_client.models.pipeline_template_legacy import PipelineTemplateLegacy

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineTemplateLegacy from a JSON string
pipeline_template_legacy_instance = PipelineTemplateLegacy.from_json(json)
# print the JSON string representation of the object
print(PipelineTemplateLegacy.to_json())

# convert the object into a dict
pipeline_template_legacy_dict = pipeline_template_legacy_instance.to_dict()
# create an instance of PipelineTemplateLegacy from a dict
pipeline_template_legacy_from_dict = PipelineTemplateLegacy.from_dict(pipeline_template_legacy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


