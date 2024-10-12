# TemplateMetadata

Metadata describing a template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. A description of the template. | [optional] 
**name** | **str** | Required. The name of the template. | [optional] 
**parameters** | [**List[ParameterMetadata]**](ParameterMetadata.md) | The parameters for the template. | [optional] 
**streaming** | **bool** | Optional. Indicates if the template is streaming or not. | [optional] 
**supports_at_least_once** | **bool** | Optional. Indicates if the streaming template supports at least once mode. | [optional] 
**supports_exactly_once** | **bool** | Optional. Indicates if the streaming template supports exactly once mode. | [optional] 

## Example

```python
from openapi_client.models.template_metadata import TemplateMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateMetadata from a JSON string
template_metadata_instance = TemplateMetadata.from_json(json)
# print the JSON string representation of the object
print(TemplateMetadata.to_json())

# convert the object into a dict
template_metadata_dict = template_metadata_instance.to_dict()
# create an instance of TemplateMetadata from a dict
template_metadata_from_dict = TemplateMetadata.from_dict(template_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


