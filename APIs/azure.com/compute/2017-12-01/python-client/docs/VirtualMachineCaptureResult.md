# VirtualMachineCaptureResult

Resource Id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VirtualMachineCaptureResultProperties**](VirtualMachineCaptureResultProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_capture_result import VirtualMachineCaptureResult

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineCaptureResult from a JSON string
virtual_machine_capture_result_instance = VirtualMachineCaptureResult.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineCaptureResult.to_json())

# convert the object into a dict
virtual_machine_capture_result_dict = virtual_machine_capture_result_instance.to_dict()
# create an instance of VirtualMachineCaptureResult from a dict
virtual_machine_capture_result_from_dict = VirtualMachineCaptureResult.from_dict(virtual_machine_capture_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


