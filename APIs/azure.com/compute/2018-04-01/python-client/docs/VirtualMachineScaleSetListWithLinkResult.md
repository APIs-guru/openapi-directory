# VirtualMachineScaleSetListWithLinkResult

The List Virtual Machine operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The uri to fetch the next page of Virtual Machine Scale Sets. Call ListNext() with this to fetch the next page of Virtual Machine Scale Sets. | [optional] 
**value** | [**List[VirtualMachineScaleSet]**](VirtualMachineScaleSet.md) | The list of virtual machine scale sets. | 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_list_with_link_result import VirtualMachineScaleSetListWithLinkResult

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetListWithLinkResult from a JSON string
virtual_machine_scale_set_list_with_link_result_instance = VirtualMachineScaleSetListWithLinkResult.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetListWithLinkResult.to_json())

# convert the object into a dict
virtual_machine_scale_set_list_with_link_result_dict = virtual_machine_scale_set_list_with_link_result_instance.to_dict()
# create an instance of VirtualMachineScaleSetListWithLinkResult from a dict
virtual_machine_scale_set_list_with_link_result_from_dict = VirtualMachineScaleSetListWithLinkResult.from_dict(virtual_machine_scale_set_list_with_link_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


