# GlobalResourcesSharedModelsTranslationSetString

The resulting translation in a translation set.  is the  to which the string will be translated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_id** | **int** | The ID of the language into which to translate the string | 
**string_id** | **str** | The Id of the string translation that has been requested | 
**string_value** | **str** | The string value returned from the translator | [optional] 
**translation_set_id** | **int** | The id of the TranslationSet | 

## Example

```python
from openapi_client.models.global_resources_shared_models_translation_set_string import GlobalResourcesSharedModelsTranslationSetString

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalResourcesSharedModelsTranslationSetString from a JSON string
global_resources_shared_models_translation_set_string_instance = GlobalResourcesSharedModelsTranslationSetString.from_json(json)
# print the JSON string representation of the object
print(GlobalResourcesSharedModelsTranslationSetString.to_json())

# convert the object into a dict
global_resources_shared_models_translation_set_string_dict = global_resources_shared_models_translation_set_string_instance.to_dict()
# create an instance of GlobalResourcesSharedModelsTranslationSetString from a dict
global_resources_shared_models_translation_set_string_from_dict = GlobalResourcesSharedModelsTranslationSetString.from_dict(global_resources_shared_models_translation_set_string_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


