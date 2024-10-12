# LanguageSettings

Language settings for an account. These settings correspond to the \"Language settings\" feature in the web interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_language** | **str** | The language to display Gmail in, formatted as an RFC 3066 Language Tag (for example &#x60;en-GB&#x60;, &#x60;fr&#x60; or &#x60;ja&#x60; for British English, French, or Japanese respectively). The set of languages supported by Gmail evolves over time, so please refer to the \&quot;Language\&quot; dropdown in the Gmail settings for all available options, as described in the language settings help article. A table of sample values is also provided in the Managing Language Settings guide Not all Gmail clients can display the same set of languages. In the case that a user&#39;s display language is not available for use on a particular client, said client automatically chooses to display in the closest supported variant (or a reasonable default). | [optional] 

## Example

```python
from openapi_client.models.language_settings import LanguageSettings

# TODO update the JSON string below
json = "{}"
# create an instance of LanguageSettings from a JSON string
language_settings_instance = LanguageSettings.from_json(json)
# print the JSON string representation of the object
print(LanguageSettings.to_json())

# convert the object into a dict
language_settings_dict = language_settings_instance.to_dict()
# create an instance of LanguageSettings from a dict
language_settings_from_dict = LanguageSettings.from_dict(language_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


