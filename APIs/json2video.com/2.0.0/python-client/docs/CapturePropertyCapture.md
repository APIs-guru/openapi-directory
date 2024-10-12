# CapturePropertyCapture

Browser capture settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **float** | Screen recording duration in seconds. Use 0 to take a screenshot | [optional] [default to 0]
**height** | **int** | Viewport height | [default to 360]
**width** | **int** | Viewport width | [default to 640]

## Example

```python
from openapi_client.models.capture_property_capture import CapturePropertyCapture

# TODO update the JSON string below
json = "{}"
# create an instance of CapturePropertyCapture from a JSON string
capture_property_capture_instance = CapturePropertyCapture.from_json(json)
# print the JSON string representation of the object
print(CapturePropertyCapture.to_json())

# convert the object into a dict
capture_property_capture_dict = capture_property_capture_instance.to_dict()
# create an instance of CapturePropertyCapture from a dict
capture_property_capture_from_dict = CapturePropertyCapture.from_dict(capture_property_capture_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


