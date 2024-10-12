# TranslationsResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_source_language** | **str** | The source language of the initial request, detected automatically, if no source language was passed within the initial request. If the source language was passed, auto-detection of the language will not occur and this field will be empty. | [optional] 
**model** | **str** | The &#x60;model&#x60; type used for this translation. Valid values are listed in public documentation. Can be different from requested &#x60;model&#x60;. Present only if specific model type was explicitly requested. | [optional] 
**translated_text** | **str** | Text translated into the target language. | [optional] 

## Example

```python
from openapi_client.models.translations_resource import TranslationsResource

# TODO update the JSON string below
json = "{}"
# create an instance of TranslationsResource from a JSON string
translations_resource_instance = TranslationsResource.from_json(json)
# print the JSON string representation of the object
print(TranslationsResource.to_json())

# convert the object into a dict
translations_resource_dict = translations_resource_instance.to_dict()
# create an instance of TranslationsResource from a dict
translations_resource_from_dict = TranslationsResource.from_dict(translations_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


