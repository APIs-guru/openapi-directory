# SupportedLanguages

The response message for discovering supported languages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**languages** | [**List[SupportedLanguage]**](SupportedLanguage.md) | A list of supported language responses. This list contains an entry for each language the Translation API supports. | [optional] 

## Example

```python
from openapi_client.models.supported_languages import SupportedLanguages

# TODO update the JSON string below
json = "{}"
# create an instance of SupportedLanguages from a JSON string
supported_languages_instance = SupportedLanguages.from_json(json)
# print the JSON string representation of the object
print(SupportedLanguages.to_json())

# convert the object into a dict
supported_languages_dict = supported_languages_instance.to_dict()
# create an instance of SupportedLanguages from a dict
supported_languages_from_dict = SupportedLanguages.from_dict(supported_languages_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


