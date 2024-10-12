# InsertTextRequest

Inserts text at the specified location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_of_segment_location** | [**EndOfSegmentLocation**](EndOfSegmentLocation.md) |  | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 
**text** | **str** | The text to be inserted. Inserting a newline character will implicitly create a new Paragraph at that index. The paragraph style of the new paragraph will be copied from the paragraph at the current insertion index, including lists and bullets. Text styles for inserted text will be determined automatically, generally preserving the styling of neighboring text. In most cases, the text style for the inserted text will match the text immediately before the insertion index. Some control characters (U+0000-U+0008, U+000C-U+001F) and characters from the Unicode Basic Multilingual Plane Private Use Area (U+E000-U+F8FF) will be stripped out of the inserted text. | [optional] 

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


