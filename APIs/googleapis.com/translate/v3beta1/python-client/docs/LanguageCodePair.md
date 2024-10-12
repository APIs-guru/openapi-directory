# LanguageCodePair

Used with unidirectional glossaries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_language_code** | **str** | Required. The BCP-47 language code of the input text, for example, \&quot;en-US\&quot;. Expected to be an exact match for GlossaryTerm.language_code. | [optional] 
**target_language_code** | **str** | Required. The BCP-47 language code for translation output, for example, \&quot;zh-CN\&quot;. Expected to be an exact match for GlossaryTerm.language_code. | [optional] 

## Example

```python
from openapi_client.models.language_code_pair import LanguageCodePair

# TODO update the JSON string below
json = "{}"
# create an instance of LanguageCodePair from a JSON string
language_code_pair_instance = LanguageCodePair.from_json(json)
# print the JSON string representation of the object
print(LanguageCodePair.to_json())

# convert the object into a dict
language_code_pair_dict = language_code_pair_instance.to_dict()
# create an instance of LanguageCodePair from a dict
language_code_pair_from_dict = LanguageCodePair.from_dict(language_code_pair_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


