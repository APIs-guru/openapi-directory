# TextSpan

Represents a text span in the input document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**begin_offset** | **int** | The API calculates the beginning offset of the content in the original document according to the EncodingType specified in the API request. | [optional] 
**content** | **str** | The content of the text span, which is a substring of the document. | [optional] 

## Example

```python
from openapi_client.models.text_span import TextSpan

# TODO update the JSON string below
json = "{}"
# create an instance of TextSpan from a JSON string
text_span_instance = TextSpan.from_json(json)
# print the JSON string representation of the object
print(TextSpan.to_json())

# convert the object into a dict
text_span_dict = text_span_instance.to_dict()
# create an instance of TextSpan from a dict
text_span_from_dict = TextSpan.from_dict(text_span_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


