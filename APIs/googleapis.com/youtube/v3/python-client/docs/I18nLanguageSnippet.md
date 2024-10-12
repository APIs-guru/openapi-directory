# I18nLanguageSnippet

Basic details about an i18n language, such as language code and human-readable name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hl** | **str** | A short BCP-47 code that uniquely identifies a language. | [optional] 
**name** | **str** | The human-readable name of the language in the language itself. | [optional] 

## Example

```python
from openapi_client.models.i18n_language_snippet import I18nLanguageSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of I18nLanguageSnippet from a JSON string
i18n_language_snippet_instance = I18nLanguageSnippet.from_json(json)
# print the JSON string representation of the object
print(I18nLanguageSnippet.to_json())

# convert the object into a dict
i18n_language_snippet_dict = i18n_language_snippet_instance.to_dict()
# create an instance of I18nLanguageSnippet from a dict
i18n_language_snippet_from_dict = I18nLanguageSnippet.from_dict(i18n_language_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


