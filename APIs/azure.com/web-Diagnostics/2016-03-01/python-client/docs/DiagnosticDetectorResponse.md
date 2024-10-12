# DiagnosticDetectorResponse

Class representing Response from Diagnostic Detectors

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | DiagnosticDetectorResponse resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.diagnostic_detector_response import DiagnosticDetectorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticDetectorResponse from a JSON string
diagnostic_detector_response_instance = DiagnosticDetectorResponse.from_json(json)
# print the JSON string representation of the object
print(DiagnosticDetectorResponse.to_json())

# convert the object into a dict
diagnostic_detector_response_dict = diagnostic_detector_response_instance.to_dict()
# create an instance of DiagnosticDetectorResponse from a dict
diagnostic_detector_response_from_dict = DiagnosticDetectorResponse.from_dict(diagnostic_detector_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


