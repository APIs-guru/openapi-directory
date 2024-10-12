# VirtualMachineCaptureParameters

Capture Virtual Machine parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_container_name** | **str** | The destination container name. | 
**overwrite_vhds** | **bool** | Specifies whether to overwrite the destination virtual hard disk, in case of conflict. | 
**vhd_prefix** | **str** | The captured virtual hard disk&#39;s name prefix. | 

## Example

```python
from openapi_client.models.virtual_machine_capture_parameters import VirtualMachineCaptureParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineCaptureParameters from a JSON string
virtual_machine_capture_parameters_instance = VirtualMachineCaptureParameters.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineCaptureParameters.to_json())

# convert the object into a dict
virtual_machine_capture_parameters_dict = virtual_machine_capture_parameters_instance.to_dict()
# create an instance of VirtualMachineCaptureParameters from a dict
virtual_machine_capture_parameters_from_dict = VirtualMachineCaptureParameters.from_dict(virtual_machine_capture_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


