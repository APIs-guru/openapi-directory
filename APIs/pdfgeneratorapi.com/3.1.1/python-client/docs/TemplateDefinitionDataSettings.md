# TemplateDefinitionDataSettings

Defines filter and sort option for root data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_by** | **List[object]** |  | [optional] 
**sort_by** | **List[object]** |  | [optional] 

## Example

```python
from openapi_client.models.template_definition_data_settings import TemplateDefinitionDataSettings

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateDefinitionDataSettings from a JSON string
template_definition_data_settings_instance = TemplateDefinitionDataSettings.from_json(json)
# print the JSON string representation of the object
print(TemplateDefinitionDataSettings.to_json())

# convert the object into a dict
template_definition_data_settings_dict = template_definition_data_settings_instance.to_dict()
# create an instance of TemplateDefinitionDataSettings from a dict
template_definition_data_settings_from_dict = TemplateDefinitionDataSettings.from_dict(template_definition_data_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


