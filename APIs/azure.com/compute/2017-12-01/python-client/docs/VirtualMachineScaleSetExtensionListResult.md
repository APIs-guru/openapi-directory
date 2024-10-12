# VirtualMachineScaleSetExtensionListResult

The List VM scale set extension operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The uri to fetch the next page of VM scale set extensions. Call ListNext() with this to fetch the next page of VM scale set extensions. | [optional] 
**value** | [**List[VirtualMachineScaleSetExtension]**](VirtualMachineScaleSetExtension.md) | The list of VM scale set extensions. | 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_extension_list_result import VirtualMachineScaleSetExtensionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetExtensionListResult from a JSON string
virtual_machine_scale_set_extension_list_result_instance = VirtualMachineScaleSetExtensionListResult.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetExtensionListResult.to_json())

# convert the object into a dict
virtual_machine_scale_set_extension_list_result_dict = virtual_machine_scale_set_extension_list_result_instance.to_dict()
# create an instance of VirtualMachineScaleSetExtensionListResult from a dict
virtual_machine_scale_set_extension_list_result_from_dict = VirtualMachineScaleSetExtensionListResult.from_dict(virtual_machine_scale_set_extension_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


