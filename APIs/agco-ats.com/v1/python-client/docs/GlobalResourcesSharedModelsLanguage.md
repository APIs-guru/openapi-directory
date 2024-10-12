# GlobalResourcesSharedModelsLanguage

A language used for string translations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the language (e.g. “English – United States”). | 
**is_deleted** | **bool** | Indicates whether the API supports the language. Must be false when created. Read Only. | [optional] 
**locale_id** | **int** | The Locale Id of the language. | 

## Example

```python
from openapi_client.models.global_resources_shared_models_language import GlobalResourcesSharedModelsLanguage

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalResourcesSharedModelsLanguage from a JSON string
global_resources_shared_models_language_instance = GlobalResourcesSharedModelsLanguage.from_json(json)
# print the JSON string representation of the object
print(GlobalResourcesSharedModelsLanguage.to_json())

# convert the object into a dict
global_resources_shared_models_language_dict = global_resources_shared_models_language_instance.to_dict()
# create an instance of GlobalResourcesSharedModelsLanguage from a dict
global_resources_shared_models_language_from_dict = GlobalResourcesSharedModelsLanguage.from_dict(global_resources_shared_models_language_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


