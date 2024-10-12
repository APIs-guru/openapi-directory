# ReadResult

Text extracted from a page in the input document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**angle** | **float** | The general orientation of the text in clockwise direction, measured in degrees between (-180, 180]. | 
**height** | **float** | The height of the image/PDF in pixels/inches, respectively. | 
**language** | [**Language**](Language.md) |  | [optional] 
**lines** | [**List[TextLine]**](TextLine.md) | When includeTextDetails is set to true, a list of recognized text lines. The maximum number of lines returned is 300 per page. The lines are sorted top to bottom, left to right, although in certain cases proximity is treated with higher priority. As the sorting order depends on the detected text, it may change across images and OCR version updates. Thus, business logic should be built upon the actual line location instead of order. | [optional] 
**page** | **int** | The 1-based page number in the input document. | 
**unit** | **str** | The unit used by the width, height and boundingBox properties. For images, the unit is \&quot;pixel\&quot;. For PDF, the unit is \&quot;inch\&quot;. | 
**width** | **float** | The width of the image/PDF in pixels/inches, respectively. | 

## Example

```python
from openapi_client.models.read_result import ReadResult

# TODO update the JSON string below
json = "{}"
# create an instance of ReadResult from a JSON string
read_result_instance = ReadResult.from_json(json)
# print the JSON string representation of the object
print(ReadResult.to_json())

# convert the object into a dict
read_result_dict = read_result_instance.to_dict()
# create an instance of ReadResult from a dict
read_result_from_dict = ReadResult.from_dict(read_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


