# LocalizedText

Localized variant of a text in a particular language.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | The text&#39;s BCP-47 language code, such as \&quot;en-US\&quot; or \&quot;sr-Latn\&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. | [optional] 
**text** | **str** | Localized string in the language corresponding to &#x60;language_code&#39; below. | [optional] 

## Example

```python
from openapi_client.models.localized_text import LocalizedText

# TODO update the JSON string below
json = "{}"
# create an instance of LocalizedText from a JSON string
localized_text_instance = LocalizedText.from_json(json)
# print the JSON string representation of the object
print(LocalizedText.to_json())

# convert the object into a dict
localized_text_dict = localized_text_instance.to_dict()
# create an instance of LocalizedText from a dict
localized_text_from_dict = LocalizedText.from_dict(localized_text_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


