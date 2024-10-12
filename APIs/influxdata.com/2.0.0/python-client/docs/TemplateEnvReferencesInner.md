# TemplateEnvReferencesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | [**TemplateEnvReferencesInnerDefaultValue**](TemplateEnvReferencesInnerDefaultValue.md) |  | [optional] 
**env_ref_key** | **str** | Key identified as environment reference and is the key identified in the template | 
**resource_field** | **str** | Field the environment reference corresponds too | 
**value** | [**TemplateEnvReferencesInnerValue**](TemplateEnvReferencesInnerValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.template_env_references_inner import TemplateEnvReferencesInner

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateEnvReferencesInner from a JSON string
template_env_references_inner_instance = TemplateEnvReferencesInner.from_json(json)
# print the JSON string representation of the object
print(TemplateEnvReferencesInner.to_json())

# convert the object into a dict
template_env_references_inner_dict = template_env_references_inner_instance.to_dict()
# create an instance of TemplateEnvReferencesInner from a dict
template_env_references_inner_from_dict = TemplateEnvReferencesInner.from_dict(template_env_references_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


