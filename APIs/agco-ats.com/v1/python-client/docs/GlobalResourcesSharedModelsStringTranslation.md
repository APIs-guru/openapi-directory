# GlobalResourcesSharedModelsStringTranslation

A translation of a string in a specific language

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author_id** | **int** | The id of the user to last edit thie translation | [optional] 
**language_id** | **int** | The id of the language of the translation | [optional] 
**state** | **str** | The state of the translation | [optional] 
**string_id** | **str** | The id of the string that is translated | [optional] 
**string_value** | **str** | The translated string | 
**timestamp** | **bytearray** | A value indicating the last modification of this translation. Read Only. | [optional] 

## Example

```python
from openapi_client.models.global_resources_shared_models_string_translation import GlobalResourcesSharedModelsStringTranslation

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalResourcesSharedModelsStringTranslation from a JSON string
global_resources_shared_models_string_translation_instance = GlobalResourcesSharedModelsStringTranslation.from_json(json)
# print the JSON string representation of the object
print(GlobalResourcesSharedModelsStringTranslation.to_json())

# convert the object into a dict
global_resources_shared_models_string_translation_dict = global_resources_shared_models_string_translation_instance.to_dict()
# create an instance of GlobalResourcesSharedModelsStringTranslation from a dict
global_resources_shared_models_string_translation_from_dict = GlobalResourcesSharedModelsStringTranslation.from_dict(global_resources_shared_models_string_translation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


