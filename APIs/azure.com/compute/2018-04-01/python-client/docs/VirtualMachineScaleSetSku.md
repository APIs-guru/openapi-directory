# VirtualMachineScaleSetSku

Describes an available virtual machine scale set sku.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | [**VirtualMachineScaleSetSkuCapacity**](VirtualMachineScaleSetSkuCapacity.md) |  | [optional] 
**resource_type** | **str** | The type of resource the sku applies to. | [optional] [readonly] 
**sku** | [**Sku**](Sku.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_sku import VirtualMachineScaleSetSku

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetSku from a JSON string
virtual_machine_scale_set_sku_instance = VirtualMachineScaleSetSku.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetSku.to_json())

# convert the object into a dict
virtual_machine_scale_set_sku_dict = virtual_machine_scale_set_sku_instance.to_dict()
# create an instance of VirtualMachineScaleSetSku from a dict
virtual_machine_scale_set_sku_from_dict = VirtualMachineScaleSetSku.from_dict(virtual_machine_scale_set_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


