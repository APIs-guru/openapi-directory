# GlobalResourcesSharedModelsTranslationSetAttribute

An attribute of a

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of this attribute. | [optional] 
**name** | **str** | The name of this Attribute. | 
**translation_set_id** | **int** | The ID of the translation set to which this attribute belongs. | [optional] 
**value** | **str** | The value of this Attribute | [optional] 

## Example

```python
from openapi_client.models.global_resources_shared_models_translation_set_attribute import GlobalResourcesSharedModelsTranslationSetAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalResourcesSharedModelsTranslationSetAttribute from a JSON string
global_resources_shared_models_translation_set_attribute_instance = GlobalResourcesSharedModelsTranslationSetAttribute.from_json(json)
# print the JSON string representation of the object
print(GlobalResourcesSharedModelsTranslationSetAttribute.to_json())

# convert the object into a dict
global_resources_shared_models_translation_set_attribute_dict = global_resources_shared_models_translation_set_attribute_instance.to_dict()
# create an instance of GlobalResourcesSharedModelsTranslationSetAttribute from a dict
global_resources_shared_models_translation_set_attribute_from_dict = GlobalResourcesSharedModelsTranslationSetAttribute.from_dict(global_resources_shared_models_translation_set_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


