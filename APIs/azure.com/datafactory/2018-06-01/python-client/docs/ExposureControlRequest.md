# ExposureControlRequest

The exposure control request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_name** | **str** | The feature name. | [optional] 
**feature_type** | **str** | The feature type. | [optional] 

## Example

```python
from openapi_client.models.exposure_control_request import ExposureControlRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExposureControlRequest from a JSON string
exposure_control_request_instance = ExposureControlRequest.from_json(json)
# print the JSON string representation of the object
print(ExposureControlRequest.to_json())

# convert the object into a dict
exposure_control_request_dict = exposure_control_request_instance.to_dict()
# create an instance of ExposureControlRequest from a dict
exposure_control_request_from_dict = ExposureControlRequest.from_dict(exposure_control_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


