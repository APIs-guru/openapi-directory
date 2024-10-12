# VirtualMachineCaptureResultProperties

Compute-specific operation properties, including output

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output** | **object** | Operation output data (raw JSON) | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_capture_result_properties import VirtualMachineCaptureResultProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineCaptureResultProperties from a JSON string
virtual_machine_capture_result_properties_instance = VirtualMachineCaptureResultProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineCaptureResultProperties.to_json())

# convert the object into a dict
virtual_machine_capture_result_properties_dict = virtual_machine_capture_result_properties_instance.to_dict()
# create an instance of VirtualMachineCaptureResultProperties from a dict
virtual_machine_capture_result_properties_from_dict = VirtualMachineCaptureResultProperties.from_dict(virtual_machine_capture_result_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


