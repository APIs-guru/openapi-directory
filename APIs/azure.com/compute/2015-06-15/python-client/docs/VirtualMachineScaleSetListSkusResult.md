# VirtualMachineScaleSetListSkusResult

The Virtual Machine Scale Set List Skus operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of skus available for the virtual machine scale set. Call ListNext() with this to fetch the next page of skus available for the virtual machine scale set. | [optional] 
**value** | [**List[VirtualMachineScaleSetSku]**](VirtualMachineScaleSetSku.md) | The list of skus available for the virtual machine scale set. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_list_skus_result import VirtualMachineScaleSetListSkusResult

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetListSkusResult from a JSON string
virtual_machine_scale_set_list_skus_result_instance = VirtualMachineScaleSetListSkusResult.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetListSkusResult.to_json())

# convert the object into a dict
virtual_machine_scale_set_list_skus_result_dict = virtual_machine_scale_set_list_skus_result_instance.to_dict()
# create an instance of VirtualMachineScaleSetListSkusResult from a dict
virtual_machine_scale_set_list_skus_result_from_dict = VirtualMachineScaleSetListSkusResult.from_dict(virtual_machine_scale_set_list_skus_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


