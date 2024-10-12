# GoogleAdsSearchads360V0ResourcesLanguageConstant

A language.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Output only. The language code, for example, \&quot;en_US\&quot;, \&quot;en_AU\&quot;, \&quot;es\&quot;, \&quot;fr\&quot;, etc. | [optional] [readonly] 
**id** | **str** | Output only. The ID of the language constant. | [optional] [readonly] 
**name** | **str** | Output only. The full name of the language in English, for example, \&quot;English (US)\&quot;, \&quot;Spanish\&quot;, etc. | [optional] [readonly] 
**resource_name** | **str** | Output only. The resource name of the language constant. Language constant resource names have the form: &#x60;languageConstants/{criterion_id}&#x60; | [optional] [readonly] 
**targetable** | **bool** | Output only. Whether the language is targetable. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_language_constant import GoogleAdsSearchads360V0ResourcesLanguageConstant

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesLanguageConstant from a JSON string
google_ads_searchads360_v0_resources_language_constant_instance = GoogleAdsSearchads360V0ResourcesLanguageConstant.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesLanguageConstant.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_language_constant_dict = google_ads_searchads360_v0_resources_language_constant_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesLanguageConstant from a dict
google_ads_searchads360_v0_resources_language_constant_from_dict = GoogleAdsSearchads360V0ResourcesLanguageConstant.from_dict(google_ads_searchads360_v0_resources_language_constant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


