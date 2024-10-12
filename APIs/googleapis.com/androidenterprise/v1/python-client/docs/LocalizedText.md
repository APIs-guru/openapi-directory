# LocalizedText

A localized string with its locale.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | The BCP47 tag for a locale. (e.g. \&quot;en-US\&quot;, \&quot;de\&quot;). | [optional] 
**text** | **str** | The text localized in the associated locale. | [optional] 

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


