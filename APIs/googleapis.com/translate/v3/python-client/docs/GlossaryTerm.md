# GlossaryTerm

Represents a single glossary term

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | The language for this glossary term. | [optional] 
**text** | **str** | The text for the glossary term. | [optional] 

## Example

```python
from openapi_client.models.glossary_term import GlossaryTerm

# TODO update the JSON string below
json = "{}"
# create an instance of GlossaryTerm from a JSON string
glossary_term_instance = GlossaryTerm.from_json(json)
# print the JSON string representation of the object
print(GlossaryTerm.to_json())

# convert the object into a dict
glossary_term_dict = glossary_term_instance.to_dict()
# create an instance of GlossaryTerm from a dict
glossary_term_from_dict = GlossaryTerm.from_dict(glossary_term_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


