# Translation

A single translation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_language_code** | **str** | The ISO-639 language code of source text in the initial request, detected automatically, if no source language was passed within the initial request. If the source language was passed, auto-detection of the language does not occur and this field is empty. | [optional] 
**glossary_config** | [**TranslateTextGlossaryConfig**](TranslateTextGlossaryConfig.md) |  | [optional] 
**model** | **str** | Only present when &#x60;model&#x60; is present in the request. &#x60;model&#x60; here is normalized to have project number. For example: If the &#x60;model&#x60; requested in TranslationTextRequest is &#x60;projects/{project-id}/locations/{location-id}/models/general/nmt&#x60; then &#x60;model&#x60; here would be normalized to &#x60;projects/{project-number}/locations/{location-id}/models/general/nmt&#x60;. | [optional] 
**translated_text** | **str** | Text translated into the target language. If an error occurs during translation, this field might be excluded from the response. | [optional] 

## Example

```python
from openapi_client.models.translation import Translation

# TODO update the JSON string below
json = "{}"
# create an instance of Translation from a JSON string
translation_instance = Translation.from_json(json)
# print the JSON string representation of the object
print(Translation.to_json())

# convert the object into a dict
translation_dict = translation_instance.to_dict()
# create an instance of Translation from a dict
translation_from_dict = Translation.from_dict(translation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


