# GoogleTypeLocalizedText

Localized variant of a text in a particular language.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | The text&#39;s BCP-47 language code, such as \&quot;en-US\&quot; or \&quot;sr-Latn\&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. | [optional] 
**text** | **str** | Localized string in the language corresponding to language_code below. | [optional] 

## Example

```python
from openapi_client.models.google_type_localized_text import GoogleTypeLocalizedText

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleTypeLocalizedText from a JSON string
google_type_localized_text_instance = GoogleTypeLocalizedText.from_json(json)
# print the JSON string representation of the object
print(GoogleTypeLocalizedText.to_json())

# convert the object into a dict
google_type_localized_text_dict = google_type_localized_text_instance.to_dict()
# create an instance of GoogleTypeLocalizedText from a dict
google_type_localized_text_from_dict = GoogleTypeLocalizedText.from_dict(google_type_localized_text_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


