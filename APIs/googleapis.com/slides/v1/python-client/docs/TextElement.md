# TextElement

A TextElement describes the content of a range of indices in the text content of a Shape or TableCell.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_text** | [**AutoText**](AutoText.md) |  | [optional] 
**end_index** | **int** | The zero-based end index of this text element, exclusive, in Unicode code units. | [optional] 
**paragraph_marker** | [**ParagraphMarker**](ParagraphMarker.md) |  | [optional] 
**start_index** | **int** | The zero-based start index of this text element, in Unicode code units. | [optional] 
**text_run** | [**TextRun**](TextRun.md) |  | [optional] 

## Example

```python
from openapi_client.models.text_element import TextElement

# TODO update the JSON string below
json = "{}"
# create an instance of TextElement from a JSON string
text_element_instance = TextElement.from_json(json)
# print the JSON string representation of the object
print(TextElement.to_json())

# convert the object into a dict
text_element_dict = text_element_instance.to_dict()
# create an instance of TextElement from a dict
text_element_from_dict = TextElement.from_dict(text_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


