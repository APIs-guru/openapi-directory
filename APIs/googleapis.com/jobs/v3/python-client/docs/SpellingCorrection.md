# SpellingCorrection

Output only. Spell check result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**corrected** | **bool** | Indicates if the query was corrected by the spell checker. | [optional] 
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


