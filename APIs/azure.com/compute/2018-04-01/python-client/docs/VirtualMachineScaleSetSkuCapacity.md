# VirtualMachineScaleSetSkuCapacity

Describes scaling information of a sku.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_capacity** | **int** | The default capacity. | [optional] [readonly] 
**maximum** | **int** | The maximum capacity that can be set. | [optional] [readonly] 
**minimum** | **int** | The minimum capacity. | [optional] [readonly] 
**scale_type** | **str** | The scale type applicable to the sku. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_sku_capacity import VirtualMachineScaleSetSkuCapacity

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetSkuCapacity from a JSON string
virtual_machine_scale_set_sku_capacity_instance = VirtualMachineScaleSetSkuCapacity.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetSkuCapacity.to_json())

# convert the object into a dict
virtual_machine_scale_set_sku_capacity_dict = virtual_machine_scale_set_sku_capacity_instance.to_dict()
# create an instance of VirtualMachineScaleSetSkuCapacity from a dict
virtual_machine_scale_set_sku_capacity_from_dict = VirtualMachineScaleSetSkuCapacity.from_dict(virtual_machine_scale_set_sku_capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


