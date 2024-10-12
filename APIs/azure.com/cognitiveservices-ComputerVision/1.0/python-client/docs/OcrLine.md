# OcrLine

An object describing a single recognized line of text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box** | **str** | Bounding box of a recognized line. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down. | [optional] 
**words** | [**List[OcrWord]**](OcrWord.md) | An array of objects, where each object represents a recognized word. | [optional] 

## Example

```python
from openapi_client.models.ocr_line import OcrLine

# TODO update the JSON string below
json = "{}"
# create an instance of OcrLine from a JSON string
ocr_line_instance = OcrLine.from_json(json)
# print the JSON string representation of the object
print(OcrLine.to_json())

# convert the object into a dict
ocr_line_dict = ocr_line_instance.to_dict()
# create an instance of OcrLine from a dict
ocr_line_from_dict = OcrLine.from_dict(ocr_line_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


