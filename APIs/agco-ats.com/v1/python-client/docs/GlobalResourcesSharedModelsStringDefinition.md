# GlobalResourcesSharedModelsStringDefinition

The definition of a string to be translated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description_for_translator** | **str** | The description of the string to be translated. | 
**do_not_translate** | **bool** | True if the string should not be translated. False by default. | [optional] 
**id** | **str** | The identifier for the string. Read Only. | [optional] 
**parameter_count** | **int** | The number of parameters expected for the string. | [optional] 
**timestamp** | **bytearray** | A value indicating the last modification of this string. Read Only. | [optional] 
**translations** | [**List[GlobalResourcesSharedModelsStringTranslation]**](GlobalResourcesSharedModelsStringTranslation.md) | Translations for the string. | [optional] 

## Example

```python
from openapi_client.models.global_resources_shared_models_string_definition import GlobalResourcesSharedModelsStringDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalResourcesSharedModelsStringDefinition from a JSON string
global_resources_shared_models_string_definition_instance = GlobalResourcesSharedModelsStringDefinition.from_json(json)
# print the JSON string representation of the object
print(GlobalResourcesSharedModelsStringDefinition.to_json())

# convert the object into a dict
global_resources_shared_models_string_definition_dict = global_resources_shared_models_string_definition_instance.to_dict()
# create an instance of GlobalResourcesSharedModelsStringDefinition from a dict
global_resources_shared_models_string_definition_from_dict = GlobalResourcesSharedModelsStringDefinition.from_dict(global_resources_shared_models_string_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


