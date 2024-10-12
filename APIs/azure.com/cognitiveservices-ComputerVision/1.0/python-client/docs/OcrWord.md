# OcrWord

Information on a recognized word.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box** | **str** | Bounding box of a recognized word. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down. | [optional] 
**text** | **str** | String value of a recognized word. | [optional] 

## Example

```python
from openapi_client.models.ocr_word import OcrWord

# TODO update the JSON string below
json = "{}"
# create an instance of OcrWord from a JSON string
ocr_word_instance = OcrWord.from_json(json)
# print the JSON string representation of the object
print(OcrWord.to_json())

# convert the object into a dict
ocr_word_dict = ocr_word_instance.to_dict()
# create an instance of OcrWord from a dict
ocr_word_from_dict = OcrWord.from_dict(ocr_word_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


