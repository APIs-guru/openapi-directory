# TemplateDefinitionPagesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**components** | [**List[Component]**](Component.md) |  | [optional] 
**height** | **float** | Page height in units | [optional] 
**margins** | [**TemplateDefinitionPagesInnerMargins**](TemplateDefinitionPagesInnerMargins.md) |  | [optional] 
**width** | **float** | Page width in units | [optional] 

## Example

```python
from openapi_client.models.template_definition_pages_inner import TemplateDefinitionPagesInner

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateDefinitionPagesInner from a JSON string
template_definition_pages_inner_instance = TemplateDefinitionPagesInner.from_json(json)
# print the JSON string representation of the object
print(TemplateDefinitionPagesInner.to_json())

# convert the object into a dict
template_definition_pages_inner_dict = template_definition_pages_inner_instance.to_dict()
# create an instance of TemplateDefinitionPagesInner from a dict
template_definition_pages_inner_from_dict = TemplateDefinitionPagesInner.from_dict(template_definition_pages_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


