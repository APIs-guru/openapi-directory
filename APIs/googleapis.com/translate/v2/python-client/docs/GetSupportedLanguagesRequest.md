# GetSupportedLanguagesRequest

The request message for discovering supported languages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target** | **str** | The language to use to return localized, human readable names of supported languages. | [optional] 

## Example

```python
from openapi_client.models.get_supported_languages_request import GetSupportedLanguagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetSupportedLanguagesRequest from a JSON string
get_supported_languages_request_instance = GetSupportedLanguagesRequest.from_json(json)
# print the JSON string representation of the object
print(GetSupportedLanguagesRequest.to_json())

# convert the object into a dict
get_supported_languages_request_dict = get_supported_languages_request_instance.to_dict()
# create an instance of GetSupportedLanguagesRequest from a dict
get_supported_languages_request_from_dict = GetSupportedLanguagesRequest.from_dict(get_supported_languages_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


