# SpellingCorrection

Spell check result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**corrected** | **bool** | Indicates if the query was corrected by the spell checker. | [optional] 
**corrected_html** | **str** | Corrected output with html tags to highlight the corrected words. Corrected words are called out with the \&quot;*...*\&quot; html tags. For example, the user input query is \&quot;software enginear\&quot;, where the second word, \&quot;enginear,\&quot; is incorrect. It should be \&quot;engineer\&quot;. When spelling correction is enabled, this value is \&quot;software *engineer*\&quot;. | [optional] 
**corrected_text** | **str** | Correction output consisting of the corrected keyword string. | [optional] 

## Example

```python
from openapi_client.models.spelling_correction import SpellingCorrection

# TODO update the JSON string below
json = "{}"
# create an instance of SpellingCorrection from a JSON string
spelling_correction_instance = SpellingCorrection.from_json(json)
# print the JSON string representation of the object
print(SpellingCorrection.to_json())

# convert the object into a dict
spelling_correction_dict = spelling_correction_instance.to_dict()
# create an instance of SpellingCorrection from a dict
spelling_correction_from_dict = SpellingCorrection.from_dict(spelling_correction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


