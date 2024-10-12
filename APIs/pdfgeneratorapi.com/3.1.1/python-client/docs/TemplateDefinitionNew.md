# TemplateDefinitionNew

Template configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_draft** | **bool** | Indicates if the template is a draft or published. | [optional] 
**layout** | [**TemplateDefinitionNewLayout**](TemplateDefinitionNewLayout.md) |  | [optional] 
**name** | **str** | Template name | 
**pages** | [**List[TemplateDefinitionPagesInner]**](TemplateDefinitionPagesInner.md) | Defines page or label size, margins and components on page or label | [optional] 
**tags** | **List[str]** | A list of tags assigned to a template | [optional] 

## Example

```python
from openapi_client.models.template_definition_new import TemplateDefinitionNew

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateDefinitionNew from a JSON string
template_definition_new_instance = TemplateDefinitionNew.from_json(json)
# print the JSON string representation of the object
print(TemplateDefinitionNew.to_json())

# convert the object into a dict
template_definition_new_dict = template_definition_new_instance.to_dict()
# create an instance of TemplateDefinitionNew from a dict
template_definition_new_from_dict = TemplateDefinitionNew.from_dict(template_definition_new_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


