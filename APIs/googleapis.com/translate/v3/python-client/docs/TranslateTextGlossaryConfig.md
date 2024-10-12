# TranslateTextGlossaryConfig

Configures which glossary is used for a specific target language and defines options for applying that glossary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**glossary** | **str** | Required. The &#x60;glossary&#x60; to be applied for this translation. The format depends on the glossary: - User-provided custom glossary: &#x60;projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}&#x60; | [optional] 
**ignore_case** | **bool** | Optional. Indicates match is case insensitive. The default value is &#x60;false&#x60; if missing. | [optional] 

## Example

```python
from openapi_client.models.translate_text_glossary_config import TranslateTextGlossaryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TranslateTextGlossaryConfig from a JSON string
translate_text_glossary_config_instance = TranslateTextGlossaryConfig.from_json(json)
# print the JSON string representation of the object
print(TranslateTextGlossaryConfig.to_json())

# convert the object into a dict
translate_text_glossary_config_dict = translate_text_glossary_config_instance.to_dict()
# create an instance of TranslateTextGlossaryConfig from a dict
translate_text_glossary_config_from_dict = TranslateTextGlossaryConfig.from_dict(translate_text_glossary_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


