# TemplateDefinitionLayout

Defines template layout (e.g page format, margins).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**empty_labels** | **int** | Defines how many pages or labels should be empty | [optional] 
**format** | **str** | Defines template page size | [optional] 
**height** | **float** | Page height in units | [optional] 
**margins** | [**TemplateDefinitionLayoutMargins**](TemplateDefinitionLayoutMargins.md) |  | [optional] 
**orientation** | **str** | Page orientation | [optional] 
**repeat_layout** | [**TemplateDefinitionLayoutRepeatLayout**](TemplateDefinitionLayoutRepeatLayout.md) |  | [optional] 
**rotation** | **int** | Page rotation in degrees | [optional] 
**unit** | **str** | Measure unit | [optional] 
**width** | **float** | Page width in units | [optional] 

## Example

```python
from openapi_client.models.template_definition_layout import TemplateDefinitionLayout

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateDefinitionLayout from a JSON string
template_definition_layout_instance = TemplateDefinitionLayout.from_json(json)
# print the JSON string representation of the object
print(TemplateDefinitionLayout.to_json())

# convert the object into a dict
template_definition_layout_dict = template_definition_layout_instance.to_dict()
# create an instance of TemplateDefinitionLayout from a dict
template_definition_layout_from_dict = TemplateDefinitionLayout.from_dict(template_definition_layout_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


