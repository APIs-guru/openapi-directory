# LanguagesResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | **str** | Supported language code, generally consisting of its ISO 639-1 identifier. (E.g. &#39;en&#39;, &#39;ja&#39;). In certain cases, BCP-47 codes including language + region identifiers are returned (e.g. &#39;zh-TW&#39; and &#39;zh-CH&#39;) | [optional] 
**name** | **str** | Human readable name of the language localized to the target language. | [optional] 

## Example

```python
from openapi_client.models.languages_resource import LanguagesResource

# TODO update the JSON string below
json = "{}"
# create an instance of LanguagesResource from a JSON string
languages_resource_instance = LanguagesResource.from_json(json)
# print the JSON string representation of the object
print(LanguagesResource.to_json())

# convert the object into a dict
languages_resource_dict = languages_resource_instance.to_dict()
# create an instance of LanguagesResource from a dict
languages_resource_from_dict = LanguagesResource.from_dict(languages_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


