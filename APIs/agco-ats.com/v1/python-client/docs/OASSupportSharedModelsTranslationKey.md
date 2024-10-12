# OASSupportSharedModelsTranslationKey

A translation key to map the relationship of keyNames, usually for ODX, and string Ids

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The identifier for the translationKey. Read Only. | [optional] 
**key_name** | **str** | The key name of the item. One example is tkODX_HWIKM14R01 | 
**string_id** | **str** | Foreign key to StringDefinitionID | 

## Example

```python
from openapi_client.models.oas_support_shared_models_translation_key import OASSupportSharedModelsTranslationKey

# TODO update the JSON string below
json = "{}"
# create an instance of OASSupportSharedModelsTranslationKey from a JSON string
oas_support_shared_models_translation_key_instance = OASSupportSharedModelsTranslationKey.from_json(json)
# print the JSON string representation of the object
print(OASSupportSharedModelsTranslationKey.to_json())

# convert the object into a dict
oas_support_shared_models_translation_key_dict = oas_support_shared_models_translation_key_instance.to_dict()
# create an instance of OASSupportSharedModelsTranslationKey from a dict
oas_support_shared_models_translation_key_from_dict = OASSupportSharedModelsTranslationKey.from_dict(oas_support_shared_models_translation_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


