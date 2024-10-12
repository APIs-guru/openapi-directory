# SupportedLanguage

A single supported language response corresponds to information related to one supported language.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Human-readable name of the language localized in the display language specified in the request. | [optional] 
**language_code** | **str** | Supported language code, generally consisting of its ISO 639-1 identifier, for example, &#39;en&#39;, &#39;ja&#39;. In certain cases, ISO-639 codes including language and region identifiers are returned (for example, &#39;zh-TW&#39; and &#39;zh-CN&#39;). | [optional] 
**support_source** | **bool** | Can be used as a source language. | [optional] 
**support_target** | **bool** | Can be used as a target language. | [optional] 

## Example

```python
from openapi_client.models.supported_language import SupportedLanguage

# TODO update the JSON string below
json = "{}"
# create an instance of SupportedLanguage from a JSON string
supported_language_instance = SupportedLanguage.from_json(json)
# print the JSON string representation of the object
print(SupportedLanguage.to_json())

# convert the object into a dict
supported_language_dict = supported_language_instance.to_dict()
# create an instance of SupportedLanguage from a dict
supported_language_from_dict = SupportedLanguage.from_dict(supported_language_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


