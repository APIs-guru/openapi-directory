# OcrResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | **str** | The BCP-47 language code of the text in the image. | [optional] 
**orientation** | **str** | Orientation of the text recognized in the image. The value (up,down,left, or right) refers to the direction that the top of the recognized text is facing, after the image has been rotated around its center according to the detected text angle (see textAngle property). | [optional] 
**regions** | [**List[OcrRegion]**](OcrRegion.md) | An array of objects, where each object represents a region of recognized text. | [optional] 
**text_angle** | **float** | The angle, in degrees, of the detected text with respect to the closest horizontal or vertical direction. After rotating the input image clockwise by this angle, the recognized text lines become horizontal or vertical. In combination with the orientation property it can be used to overlay recognition results correctly on the original image, by rotating either the original image or recognition results by a suitable angle around the center of the original image. If the angle cannot be confidently detected, this property is not present. If the image contains text at different angles, only part of the text will be recognized correctly. | [optional] 

## Example

```python
from openapi_client.models.ocr_result import OcrResult

# TODO update the JSON string below
json = "{}"
# create an instance of OcrResult from a JSON string
ocr_result_instance = OcrResult.from_json(json)
# print the JSON string representation of the object
print(OcrResult.to_json())

# convert the object into a dict
ocr_result_dict = ocr_result_instance.to_dict()
# create an instance of OcrResult from a dict
ocr_result_from_dict = OcrResult.from_dict(ocr_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


