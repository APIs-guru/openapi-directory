# StructuralElement

A StructuralElement describes content that provides structure to the document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_index** | **int** | The zero-based end index of this structural element, exclusive, in UTF-16 code units. | [optional] 
**paragraph** | [**Paragraph**](Paragraph.md) |  | [optional] 
**section_break** | [**SectionBreak**](SectionBreak.md) |  | [optional] 
**start_index** | **int** | The zero-based start index of this structural element, in UTF-16 code units. | [optional] 
**table** | [**Table**](Table.md) |  | [optional] 
**table_of_contents** | [**TableOfContents**](TableOfContents.md) |  | [optional] 

## Example

```python
from openapi_client.models.structural_element import StructuralElement

# TODO update the JSON string below
json = "{}"
# create an instance of StructuralElement from a JSON string
structural_element_instance = StructuralElement.from_json(json)
# print the JSON string representation of the object
print(StructuralElement.to_json())

# convert the object into a dict
structural_element_dict = structural_element_instance.to_dict()
# create an instance of StructuralElement from a dict
structural_element_from_dict = StructuralElement.from_dict(structural_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


