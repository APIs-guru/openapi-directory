# VirtualMachineScaleSetListResult

The List Virtual Machine operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of virtual machine scale sets. Call ListNext() with this to fetch the next page of virtual machine scale sets. | [optional] 
**value** | [**List[VirtualMachineScaleSet]**](VirtualMachineScaleSet.md) | The list of virtual machine scale sets. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_list_result import VirtualMachineScaleSetListResult

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetListResult from a JSON string
virtual_machine_scale_set_list_result_instance = VirtualMachineScaleSetListResult.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetListResult.to_json())

# convert the object into a dict
virtual_machine_scale_set_list_result_dict = virtual_machine_scale_set_list_result_instance.to_dict()
# create an instance of VirtualMachineScaleSetListResult from a dict
virtual_machine_scale_set_list_result_from_dict = VirtualMachineScaleSetListResult.from_dict(virtual_machine_scale_set_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


