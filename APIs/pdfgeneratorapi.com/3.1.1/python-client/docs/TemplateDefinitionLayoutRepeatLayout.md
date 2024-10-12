# TemplateDefinitionLayoutRepeatLayout

Defines page size if layout is repeated on the page e.g sheet labels

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | Defines template page size | [optional] 
**height** | **float** | Page height in units | [optional] 
**width** | **float** | Page width in units | [optional] 

## Example

```python
from openapi_client.models.template_definition_layout_repeat_layout import TemplateDefinitionLayoutRepeatLayout

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateDefinitionLayoutRepeatLayout from a JSON string
template_definition_layout_repeat_layout_instance = TemplateDefinitionLayoutRepeatLayout.from_json(json)
# print the JSON string representation of the object
print(TemplateDefinitionLayoutRepeatLayout.to_json())

# convert the object into a dict
template_definition_layout_repeat_layout_dict = template_definition_layout_repeat_layout_instance.to_dict()
# create an instance of TemplateDefinitionLayoutRepeatLayout from a dict
template_definition_layout_repeat_layout_from_dict = TemplateDefinitionLayoutRepeatLayout.from_dict(template_definition_layout_repeat_layout_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


