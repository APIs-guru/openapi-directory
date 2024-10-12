# SectionBreak

A StructuralElement representing a section break. A section is a range of content that has the same SectionStyle. A section break represents the start of a new section, and the section style applies to the section after the section break. The document body always begins with a section break.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**section_style** | [**SectionStyle**](SectionStyle.md) |  | [optional] 
**suggested_deletion_ids** | **List[str]** | The suggested deletion IDs. If empty, then there are no suggested deletions of this content. | [optional] 
**suggested_insertion_ids** | **List[str]** | The suggested insertion IDs. A SectionBreak may have multiple insertion IDs if it&#39;s a nested suggested change. If empty, then this is not a suggested insertion. | [optional] 

## Example

```python
from openapi_client.models.section_break import SectionBreak

# TODO update the JSON string below
json = "{}"
# create an instance of SectionBreak from a JSON string
section_break_instance = SectionBreak.from_json(json)
# print the JSON string representation of the object
print(SectionBreak.to_json())

# convert the object into a dict
section_break_dict = section_break_instance.to_dict()
# create an instance of SectionBreak from a dict
section_break_from_dict = SectionBreak.from_dict(section_break_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


