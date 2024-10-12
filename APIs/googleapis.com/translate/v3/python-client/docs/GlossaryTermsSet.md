# GlossaryTermsSet

Represents a single entry for an equivalent term set glossary. This is used for equivalent term sets where each term can be replaced by the other terms in the set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terms** | [**List[GlossaryTerm]**](GlossaryTerm.md) | Each term in the set represents a term that can be replaced by the other terms. | [optional] 

## Example

```python
from openapi_client.models.glossary_terms_set import GlossaryTermsSet

# TODO update the JSON string below
json = "{}"
# create an instance of GlossaryTermsSet from a JSON string
glossary_terms_set_instance = GlossaryTermsSet.from_json(json)
# print the JSON string representation of the object
print(GlossaryTermsSet.to_json())

# convert the object into a dict
glossary_terms_set_dict = glossary_terms_set_instance.to_dict()
# create an instance of GlossaryTermsSet from a dict
glossary_terms_set_from_dict = GlossaryTermsSet.from_dict(glossary_terms_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


