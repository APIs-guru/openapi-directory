# OcrRegion

A region consists of multiple lines (e.g. a column of text in a multi-column document).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box** | **str** | Bounding box of a recognized region. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down. | [optional] 
**lines** | [**List[OcrLine]**](OcrLine.md) |  | [optional] 

## Example

```python
from openapi_client.models.ocr_region import OcrRegion

# TODO update the JSON string below
json = "{}"
# create an instance of OcrRegion from a JSON string
ocr_region_instance = OcrRegion.from_json(json)
# print the JSON string representation of the object
print(OcrRegion.to_json())

# convert the object into a dict
ocr_region_dict = ocr_region_instance.to_dict()
# create an instance of OcrRegion from a dict
ocr_region_from_dict = OcrRegion.from_dict(ocr_region_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


