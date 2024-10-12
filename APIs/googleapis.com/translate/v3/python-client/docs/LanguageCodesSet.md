# LanguageCodesSet

Used with equivalent term set glossaries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_codes** | **List[str]** | The ISO-639 language code(s) for terms defined in the glossary. All entries are unique. The list contains at least two entries. Expected to be an exact match for GlossaryTerm.language_code. | [optional] 

## Example

```python
from openapi_client.models.language_codes_set import LanguageCodesSet

# TODO update the JSON string below
json = "{}"
# create an instance of LanguageCodesSet from a JSON string
language_codes_set_instance = LanguageCodesSet.from_json(json)
# print the JSON string representation of the object
print(LanguageCodesSet.to_json())

# convert the object into a dict
language_codes_set_dict = language_codes_set_instance.to_dict()
# create an instance of LanguageCodesSet from a dict
language_codes_set_from_dict = LanguageCodesSet.from_dict(language_codes_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


