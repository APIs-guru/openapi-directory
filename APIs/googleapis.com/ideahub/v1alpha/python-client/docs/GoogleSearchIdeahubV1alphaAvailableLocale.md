# GoogleSearchIdeahubV1alphaAvailableLocale

Represents locales that are available for a web property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | A string in BCP 47 format, without a resource prefix. | [optional] 
**name** | **str** | A string in BCP 47 format, prefixed with the platform and property name, and \&quot;locales/\&quot;. Format: platforms/{platform}/properties/{property}/locales/{locale} | [optional] 

## Example

```python
from openapi_client.models.google_search_ideahub_v1alpha_available_locale import GoogleSearchIdeahubV1alphaAvailableLocale

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSearchIdeahubV1alphaAvailableLocale from a JSON string
google_search_ideahub_v1alpha_available_locale_instance = GoogleSearchIdeahubV1alphaAvailableLocale.from_json(json)
# print the JSON string representation of the object
print(GoogleSearchIdeahubV1alphaAvailableLocale.to_json())

# convert the object into a dict
google_search_ideahub_v1alpha_available_locale_dict = google_search_ideahub_v1alpha_available_locale_instance.to_dict()
# create an instance of GoogleSearchIdeahubV1alphaAvailableLocale from a dict
google_search_ideahub_v1alpha_available_locale_from_dict = GoogleSearchIdeahubV1alphaAvailableLocale.from_dict(google_search_ideahub_v1alpha_available_locale_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


