# DetectorResponse

Class representing Response from Detector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | DetectorResponse resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.detector_response import DetectorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DetectorResponse from a JSON string
detector_response_instance = DetectorResponse.from_json(json)
# print the JSON string representation of the object
print(DetectorResponse.to_json())

# convert the object into a dict
detector_response_dict = detector_response_instance.to_dict()
# create an instance of DetectorResponse from a dict
detector_response_from_dict = DetectorResponse.from_dict(detector_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


