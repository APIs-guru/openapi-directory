# TextAnnotation

TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pages** | [**List[Page]**](Page.md) | List of pages detected by OCR. | [optional] 
**text** | **str** | UTF-8 text detected on the pages. | [optional] 

## Example

```python
from openapi_client.models.text_annotation import TextAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of TextAnnotation from a JSON string
text_annotation_instance = TextAnnotation.from_json(json)
# print the JSON string representation of the object
print(TextAnnotation.to_json())

# convert the object into a dict
text_annotation_dict = text_annotation_instance.to_dict()
# create an instance of TextAnnotation from a dict
text_annotation_from_dict = TextAnnotation.from_dict(text_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


