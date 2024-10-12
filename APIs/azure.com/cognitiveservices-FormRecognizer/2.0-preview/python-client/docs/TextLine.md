# TextLine

An object representing an extracted text line.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box** | **List[float]** | Quadrangle bounding box, with coordinates specified relative to the top-left of the original image. The eight numbers represent the four points, clockwise from the top-left corner relative to the text orientation. For image, the (x, y) coordinates are measured in pixels. For PDF, the (x, y) coordinates are measured in inches. | 
**language** | [**Language**](Language.md) |  | [optional] 
**text** | **str** | The text content of the line. | 
**words** | [**List[TextWord]**](TextWord.md) | List of words in the text line. | 

## Example

```python
from openapi_client.models.text_line import TextLine

# TODO update the JSON string below
json = "{}"
# create an instance of TextLine from a JSON string
text_line_instance = TextLine.from_json(json)
# print the JSON string representation of the object
print(TextLine.to_json())

# convert the object into a dict
text_line_dict = text_line_instance.to_dict()
# create an instance of TextLine from a dict
text_line_from_dict = TextLine.from_dict(text_line_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


