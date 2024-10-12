# GlossaryEntry

Represents a single entry in a glossary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Describes the glossary entry. | [optional] 
**name** | **str** | Required. The resource name of the entry. Format: \&quot;projects/*/locations/*/glossaries/*/glossaryEntries/*\&quot; | [optional] 
**terms_pair** | [**GlossaryTermsPair**](GlossaryTermsPair.md) |  | [optional] 
**terms_set** | [**GlossaryTermsSet**](GlossaryTermsSet.md) |  | [optional] 

## Example

```python
from openapi_client.models.glossary_entry import GlossaryEntry

# TODO update the JSON string below
json = "{}"
# create an instance of GlossaryEntry from a JSON string
glossary_entry_instance = GlossaryEntry.from_json(json)
# print the JSON string representation of the object
print(GlossaryEntry.to_json())

# convert the object into a dict
glossary_entry_dict = glossary_entry_instance.to_dict()
# create an instance of GlossaryEntry from a dict
glossary_entry_from_dict = GlossaryEntry.from_dict(glossary_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


