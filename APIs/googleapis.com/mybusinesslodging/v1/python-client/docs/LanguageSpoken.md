# LanguageSpoken

Language spoken by at least one staff member.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | Required. The BCP-47 language code for the spoken language. Currently accepted codes: ar, de, en, es, fil, fr, hi, id, it, ja, ko, nl, pt, ru, vi, yue, zh. | [optional] 
**spoken** | **bool** | At least one member of the staff can speak the language. | [optional] 
**spoken_exception** | **str** | Spoken exception. | [optional] 

## Example

```python
from openapi_client.models.language_spoken import LanguageSpoken

# TODO update the JSON string below
json = "{}"
# create an instance of LanguageSpoken from a JSON string
language_spoken_instance = LanguageSpoken.from_json(json)
# print the JSON string representation of the object
print(LanguageSpoken.to_json())

# convert the object into a dict
language_spoken_dict = language_spoken_instance.to_dict()
# create an instance of LanguageSpoken from a dict
language_spoken_from_dict = LanguageSpoken.from_dict(language_spoken_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


