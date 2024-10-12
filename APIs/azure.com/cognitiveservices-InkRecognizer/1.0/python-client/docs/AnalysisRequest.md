# AnalysisRequest

This shows the expected contents of a request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_type** | **str** | This describes the domain of the client application | [optional] 
**ink_point_value_attributes** | [**List[InkPointValueAttribute]**](InkPointValueAttribute.md) |  | [optional] 
**input_device_kind** | **str** | This identifies the kind of device used as the writing instrument | [optional] 
**language** | **str** | The IETF BCP 47 language code (for ex. en-US, en-GB, hi-IN etc.) of the expected language for the handwritten content in the ink strokes. The response will include results from this language. | 
**strokes** | [**List[Stroke]**](Stroke.md) | This is the array of strokes sent for recognition. Best results are produced when the order of strokes added in the array matches the order in which the user created them. Changing the stroke order may produce unexpected results. | 
**unit** | **str** | This is the physical unit of the ink strokes. It is up to the application developer to decide how to convert the device specific units to physical units before calling the service. The conversion factor can be different based on the type of the device used. | [optional] 
**unit_multiple** | **float** |  This is a scaling factor to be applied to the point coordinates when interpreting them in the physical units specified. | [optional] 

## Example

```python
from openapi_client.models.analysis_request import AnalysisRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisRequest from a JSON string
analysis_request_instance = AnalysisRequest.from_json(json)
# print the JSON string representation of the object
print(AnalysisRequest.to_json())

# convert the object into a dict
analysis_request_dict = analysis_request_instance.to_dict()
# create an instance of AnalysisRequest from a dict
analysis_request_from_dict = AnalysisRequest.from_dict(analysis_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


