# InsertTextRequest

Inserts text into a shape or a table cell.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cell_location** | [**TableCellLocation**](TableCellLocation.md) |  | [optional] 
**insertion_index** | **int** | The index where the text will be inserted, in Unicode code units, based on TextElement indexes. The index is zero-based and is computed from the start of the string. The index may be adjusted to prevent insertions inside Unicode grapheme clusters. In these cases, the text will be inserted immediately after the grapheme cluster. | [optional] 
**object_id** | **str** | The object ID of the shape or table where the text will be inserted. | [optional] 
**text** | **str** | The text to be inserted. Inserting a newline character will implicitly create a new ParagraphMarker at that index. The paragraph style of the new paragraph will be copied from the paragraph at the current insertion index, including lists and bullets. Text styles for inserted text will be determined automatically, generally preserving the styling of neighboring text. In most cases, the text will be added to the TextRun that exists at the insertion index. Some control characters (U+0000-U+0008, U+000C-U+001F) and characters from the Unicode Basic Multilingual Plane Private Use Area (U+E000-U+F8FF) will be stripped out of the inserted text. | [optional] 

## Example

```python
from openapi_client.models.insert_text_request import InsertTextRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InsertTextRequest from a JSON string
insert_text_request_instance = InsertTextRequest.from_json(json)
# print the JSON string representation of the object
print(InsertTextRequest.to_json())

# convert the object into a dict
insert_text_request_dict = insert_text_request_instance.to_dict()
# create an instance of InsertTextRequest from a dict
insert_text_request_from_dict = InsertTextRequest.from_dict(insert_text_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


