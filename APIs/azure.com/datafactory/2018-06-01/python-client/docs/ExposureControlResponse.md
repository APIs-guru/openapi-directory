# ExposureControlResponse

The exposure control response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_name** | **str** | The feature name. | [optional] [readonly] 
**value** | **str** | The feature value. | [optional] [readonly] 

## Example

```python
from openapi_client.models.exposure_control_response import ExposureControlResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExposureControlResponse from a JSON string
exposure_control_response_instance = ExposureControlResponse.from_json(json)
# print the JSON string representation of the object
print(ExposureControlResponse.to_json())

# convert the object into a dict
exposure_control_response_dict = exposure_control_response_instance.to_dict()
# create an instance of ExposureControlResponse from a dict
exposure_control_response_from_dict = ExposureControlResponse.from_dict(exposure_control_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


