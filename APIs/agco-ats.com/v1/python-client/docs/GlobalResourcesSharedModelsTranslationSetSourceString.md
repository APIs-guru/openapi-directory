# GlobalResourcesSharedModelsTranslationSetSourceString

Information needed to translate a string in a translation set

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description_for_translator** | **str** | A description of the string to translate. This should contain context and parameter count. | [optional] 
**language_id** | **int** | The ID of the language from which to translate the string | [optional] 
**string_id** | **str** | The ID of the string to translate | [optional] 
**string_value** | **str** | The string to translate | [optional] 

## Example

```python
from openapi_client.models.global_resources_shared_models_translation_set_source_string import GlobalResourcesSharedModelsTranslationSetSourceString

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalResourcesSharedModelsTranslationSetSourceString from a JSON string
global_resources_shared_models_translation_set_source_string_instance = GlobalResourcesSharedModelsTranslationSetSourceString.from_json(json)
# print the JSON string representation of the object
print(GlobalResourcesSharedModelsTranslationSetSourceString.to_json())

# convert the object into a dict
global_resources_shared_models_translation_set_source_string_dict = global_resources_shared_models_translation_set_source_string_instance.to_dict()
# create an instance of GlobalResourcesSharedModelsTranslationSetSourceString from a dict
global_resources_shared_models_translation_set_source_string_from_dict = GlobalResourcesSharedModelsTranslationSetSourceString.from_dict(global_resources_shared_models_translation_set_source_string_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


