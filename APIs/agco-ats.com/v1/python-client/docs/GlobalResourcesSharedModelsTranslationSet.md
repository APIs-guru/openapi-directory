# GlobalResourcesSharedModelsTranslationSet

A set of strings submitted for translation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**List[GlobalResourcesSharedModelsTranslationSetAttribute]**](GlobalResourcesSharedModelsTranslationSetAttribute.md) | Attributes of the Translation Set | [optional] 
**file_ids** | **List[str]** | IDs for files related to this translation set. For example, the original and processed files | 
**id** | **int** | The id of the TranslationSet. | [optional] 
**in_date** | **datetime** | Read Only. The date the translation set was returned. | [optional] 
**notes** | **str** | Notes on the TranslationSet | [optional] 
**out_date** | **datetime** | Read Only. The date the translation set was sent out. | [optional] 
**state** | **str** | An enum indicating the state of the translation set | 
**translation_request_id** | **int** | Read Only. The Id of the TranslationRequest which generated this translation set. | [optional] 

## Example

```python
from openapi_client.models.global_resources_shared_models_translation_set import GlobalResourcesSharedModelsTranslationSet

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalResourcesSharedModelsTranslationSet from a JSON string
global_resources_shared_models_translation_set_instance = GlobalResourcesSharedModelsTranslationSet.from_json(json)
# print the JSON string representation of the object
print(GlobalResourcesSharedModelsTranslationSet.to_json())

# convert the object into a dict
global_resources_shared_models_translation_set_dict = global_resources_shared_models_translation_set_instance.to_dict()
# create an instance of GlobalResourcesSharedModelsTranslationSet from a dict
global_resources_shared_models_translation_set_from_dict = GlobalResourcesSharedModelsTranslationSet.from_dict(global_resources_shared_models_translation_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


