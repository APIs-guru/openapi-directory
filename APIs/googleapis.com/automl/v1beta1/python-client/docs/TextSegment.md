# TextSegment

A contiguous part of a text (string), assuming it has an UTF-8 NFC encoding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | Output only. The content of the TextSegment. | [optional] 
**end_offset** | **str** | Required. Zero-based character index of the first character past the end of the text segment (counting character from the beginning of the text). The character at the end_offset is NOT included in the text segment. | [optional] 
**start_offset** | **str** | Required. Zero-based character index of the first character of the text segment (counting characters from the beginning of the text). | [optional] 

## Example

```python
from openapi_client.models.text_segment import TextSegment

# TODO update the JSON string below
json = "{}"
# create an instance of TextSegment from a JSON string
text_segment_instance = TextSegment.from_json(json)
# print the JSON string representation of the object
print(TextSegment.to_json())

# convert the object into a dict
text_segment_dict = text_segment_instance.to_dict()
# create an instance of TextSegment from a dict
text_segment_from_dict = TextSegment.from_dict(text_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


