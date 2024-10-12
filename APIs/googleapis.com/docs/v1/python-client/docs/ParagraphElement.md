# ParagraphElement

A ParagraphElement describes content within a Paragraph.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_text** | [**AutoText**](AutoText.md) |  | [optional] 
**column_break** | [**ColumnBreak**](ColumnBreak.md) |  | [optional] 
**end_index** | **int** | The zero-base end index of this paragraph element, exclusive, in UTF-16 code units. | [optional] 
**equation** | [**Equation**](Equation.md) |  | [optional] 
**footnote_reference** | [**FootnoteReference**](FootnoteReference.md) |  | [optional] 
**horizontal_rule** | [**HorizontalRule**](HorizontalRule.md) |  | [optional] 
**inline_object_element** | [**InlineObjectElement**](InlineObjectElement.md) |  | [optional] 
**page_break** | [**PageBreak**](PageBreak.md) |  | [optional] 
**person** | [**Person**](Person.md) |  | [optional] 
**rich_link** | [**RichLink**](RichLink.md) |  | [optional] 
**start_index** | **int** | The zero-based start index of this paragraph element, in UTF-16 code units. | [optional] 
**text_run** | [**TextRun**](TextRun.md) |  | [optional] 

## Example

```python
from openapi_client.models.paragraph_element import ParagraphElement

# TODO update the JSON string below
json = "{}"
# create an instance of ParagraphElement from a JSON string
paragraph_element_instance = ParagraphElement.from_json(json)
# print the JSON string representation of the object
print(ParagraphElement.to_json())

# convert the object into a dict
paragraph_element_dict = paragraph_element_instance.to_dict()
# create an instance of ParagraphElement from a dict
paragraph_element_from_dict = ParagraphElement.from_dict(paragraph_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


