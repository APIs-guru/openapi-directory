# AnalysisResponse

This shows the expected contents of a response from the service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | **str** | This is the language used for recognizing handwriting from the ink strokes in the request. | [optional] 
**recognition_units** | [**List[RecognitionUnitInner]**](RecognitionUnitInner.md) | The list of recognition units based on the analysis of the ink strokes. | 
**unit** | **str** | This is the physical unit of the ink strokes. It is up to the application developer to decide how to convert the device specific units to physical units before calling the service. The conversion factor can be different based on the type of the device used. | [optional] 
**unit_multiple** | **float** |  This is a scaling factor to be applied to the point coordinates when interpreting them in the physical units specified. | [optional] 

## Example

```python
from openapi_client.models.analysis_response import AnalysisResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisResponse from a JSON string
analysis_response_instance = AnalysisResponse.from_json(json)
# print the JSON string representation of the object
print(AnalysisResponse.to_json())

# convert the object into a dict
analysis_response_dict = analysis_response_instance.to_dict()
# create an instance of AnalysisResponse from a dict
analysis_response_from_dict = AnalysisResponse.from_dict(analysis_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


