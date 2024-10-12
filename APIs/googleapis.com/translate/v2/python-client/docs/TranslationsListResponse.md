# TranslationsListResponse

The main language translation response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**translations** | [**List[TranslationsResource]**](TranslationsResource.md) | Translations contains list of translation results of given text | [optional] 

## Example

```python
from openapi_client.models.translations_list_response import TranslationsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TranslationsListResponse from a JSON string
translations_list_response_instance = TranslationsListResponse.from_json(json)
# print the JSON string representation of the object
print(TranslationsListResponse.to_json())

# convert the object into a dict
translations_list_response_dict = translations_list_response_instance.to_dict()
# create an instance of TranslationsListResponse from a dict
translations_list_response_from_dict = TranslationsListResponse.from_dict(translations_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


