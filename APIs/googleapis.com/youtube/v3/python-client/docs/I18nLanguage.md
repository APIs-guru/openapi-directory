# I18nLanguage

An *i18nLanguage* resource identifies a UI language currently supported by YouTube.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**id** | **str** | The ID that YouTube uses to uniquely identify the i18n language. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#i18nLanguage\&quot;. | [optional] [default to 'youtube#i18nLanguage']
**snippet** | [**I18nLanguageSnippet**](I18nLanguageSnippet.md) |  | [optional] 

## Example

```python
from openapi_client.models.i18n_language import I18nLanguage

# TODO update the JSON string below
json = "{}"
# create an instance of I18nLanguage from a JSON string
i18n_language_instance = I18nLanguage.from_json(json)
# print the JSON string representation of the object
print(I18nLanguage.to_json())

# convert the object into a dict
i18n_language_dict = i18n_language_instance.to_dict()
# create an instance of I18nLanguage from a dict
i18n_language_from_dict = I18nLanguage.from_dict(i18n_language_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


