# VirtualMachineScaleSet

Describes a Virtual Machine Scale Set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VirtualMachineScaleSetProperties**](VirtualMachineScaleSetProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set import VirtualMachineScaleSet

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSet from a JSON string
virtual_machine_scale_set_instance = VirtualMachineScaleSet.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSet.to_json())

# convert the object into a dict
virtual_machine_scale_set_dict = virtual_machine_scale_set_instance.to_dict()
# create an instance of VirtualMachineScaleSet from a dict
virtual_machine_scale_set_from_dict = VirtualMachineScaleSet.from_dict(virtual_machine_scale_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


