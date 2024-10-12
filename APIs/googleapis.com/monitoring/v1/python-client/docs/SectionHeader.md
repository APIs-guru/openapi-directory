# SectionHeader

A widget that defines a new section header. Sections populate a table of contents and allow easier navigation of long-form content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**divider_below** | **bool** | Whether to insert a divider below the section in the table of contents | [optional] 
**subtitle** | **str** | The subtitle of the section | [optional] 

## Example

```python
from openapi_client.models.section_header import SectionHeader

# TODO update the JSON string below
json = "{}"
# create an instance of SectionHeader from a JSON string
section_header_instance = SectionHeader.from_json(json)
# print the JSON string representation of the object
print(SectionHeader.to_json())

# convert the object into a dict
section_header_dict = section_header_instance.to_dict()
# create an instance of SectionHeader from a dict
section_header_from_dict = SectionHeader.from_dict(section_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


