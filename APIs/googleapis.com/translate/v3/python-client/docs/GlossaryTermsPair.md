# GlossaryTermsPair

Represents a single entry for an unidirectional glossary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_term** | [**GlossaryTerm**](GlossaryTerm.md) |  | [optional] 
**target_term** | [**GlossaryTerm**](GlossaryTerm.md) |  | [optional] 

## Example

```python
from openapi_client.models.glossary_terms_pair import GlossaryTermsPair

# TODO update the JSON string below
json = "{}"
# create an instance of GlossaryTermsPair from a JSON string
glossary_terms_pair_instance = GlossaryTermsPair.from_json(json)
# print the JSON string representation of the object
print(GlossaryTermsPair.to_json())

# convert the object into a dict
glossary_terms_pair_dict = glossary_terms_pair_instance.to_dict()
# create an instance of GlossaryTermsPair from a dict
glossary_terms_pair_from_dict = GlossaryTermsPair.from_dict(glossary_terms_pair_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


