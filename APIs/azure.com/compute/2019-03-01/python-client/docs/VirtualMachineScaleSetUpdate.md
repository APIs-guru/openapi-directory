# VirtualMachineScaleSetUpdate

Describes a Virtual Machine Scale Set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**VirtualMachineScaleSetIdentity**](VirtualMachineScaleSetIdentity.md) |  | [optional] 
**plan** | [**Plan**](Plan.md) |  | [optional] 
**properties** | [**VirtualMachineScaleSetUpdateProperties**](VirtualMachineScaleSetUpdateProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_update import VirtualMachineScaleSetUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetUpdate from a JSON string
virtual_machine_scale_set_update_instance = VirtualMachineScaleSetUpdate.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetUpdate.to_json())

# convert the object into a dict
virtual_machine_scale_set_update_dict = virtual_machine_scale_set_update_instance.to_dict()
# create an instance of VirtualMachineScaleSetUpdate from a dict
virtual_machine_scale_set_update_from_dict = VirtualMachineScaleSetUpdate.from_dict(virtual_machine_scale_set_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


