# LanguagesListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**languages** | [**List[LanguagesResource]**](LanguagesResource.md) | List of source/target languages supported by the translation API. If target parameter is unspecified, the list is sorted by the ASCII code point order of the language code. If target parameter is specified, the list is sorted by the collation order of the language name in the target language. | [optional] 

## Example

```python
from openapi_client.models.languages_list_response import LanguagesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LanguagesListResponse from a JSON string
languages_list_response_instance = LanguagesListResponse.from_json(json)
# print the JSON string representation of the object
print(LanguagesListResponse.to_json())

# convert the object into a dict
languages_list_response_dict = languages_list_response_instance.to_dict()
# create an instance of LanguagesListResponse from a dict
languages_list_response_from_dict = LanguagesListResponse.from_dict(languages_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


