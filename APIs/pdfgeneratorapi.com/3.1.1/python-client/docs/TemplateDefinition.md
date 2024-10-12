# TemplateDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_settings** | [**TemplateDefinitionDataSettings**](TemplateDefinitionDataSettings.md) |  | [optional] 
**editor** | [**TemplateDefinitionEditor**](TemplateDefinitionEditor.md) |  | [optional] 
**id** | **int** | Unique identifier | [optional] 
**is_draft** | **bool** | Indicates if the template is a draft or published. | [optional] 
**layout** | [**TemplateDefinitionLayout**](TemplateDefinitionLayout.md) |  | [optional] 
**name** | **str** | Template name | [optional] 
**pages** | [**List[TemplateDefinitionPagesInner]**](TemplateDefinitionPagesInner.md) | Defines page or label size, margins and components on page or label | [optional] 
**tags** | **List[str]** | A list of tags assigned to a template | [optional] 

## Example

```python
from openapi_client.models.template_definition import TemplateDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateDefinition from a JSON string
template_definition_instance = TemplateDefinition.from_json(json)
# print the JSON string representation of the object
print(TemplateDefinition.to_json())

# convert the object into a dict
template_definition_dict = template_definition_instance.to_dict()
# create an instance of TemplateDefinition from a dict
template_definition_from_dict = TemplateDefinition.from_dict(template_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


