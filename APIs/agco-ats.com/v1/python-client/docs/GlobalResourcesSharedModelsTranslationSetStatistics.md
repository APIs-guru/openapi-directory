# GlobalResourcesSharedModelsTranslationSetStatistics

Statistics for a translation set

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_ids** | **List[int]** | The IDs of languages for which translaions in this translation set have been requested | [optional] 
**string_count** | **int** | The count of unique string definitions contained in this translation set | [optional] 

## Example

```python
from openapi_client.models.global_resources_shared_models_translation_set_statistics import GlobalResourcesSharedModelsTranslationSetStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalResourcesSharedModelsTranslationSetStatistics from a JSON string
global_resources_shared_models_translation_set_statistics_instance = GlobalResourcesSharedModelsTranslationSetStatistics.from_json(json)
# print the JSON string representation of the object
print(GlobalResourcesSharedModelsTranslationSetStatistics.to_json())

# convert the object into a dict
global_resources_shared_models_translation_set_statistics_dict = global_resources_shared_models_translation_set_statistics_instance.to_dict()
# create an instance of GlobalResourcesSharedModelsTranslationSetStatistics from a dict
global_resources_shared_models_translation_set_statistics_from_dict = GlobalResourcesSharedModelsTranslationSetStatistics.from_dict(global_resources_shared_models_translation_set_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


