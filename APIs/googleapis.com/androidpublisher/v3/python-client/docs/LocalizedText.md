# LocalizedText

Localized text in given language.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | **str** | Language localization code (a BCP-47 language tag; for example, \&quot;de-AT\&quot; for Austrian German). | [optional] 
**text** | **str** | The text in the given language. | [optional] 

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


