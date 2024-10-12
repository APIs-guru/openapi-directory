# VMScaleSetConvertToSinglePlacementGroupInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_placement_group_id** | **str** | Id of the placement group in which you want future virtual machine instances to be placed. To query placement group Id, please use Virtual Machine Scale Set VMs - Get API. If not provided, the platform will choose one with maximum number of virtual machine instances. | [optional] 

## Example

```python
from openapi_client.models.vm_scale_set_convert_to_single_placement_group_input import VMScaleSetConvertToSinglePlacementGroupInput

# TODO update the JSON string below
json = "{}"
# create an instance of VMScaleSetConvertToSinglePlacementGroupInput from a JSON string
vm_scale_set_convert_to_single_placement_group_input_instance = VMScaleSetConvertToSinglePlacementGroupInput.from_json(json)
# print the JSON string representation of the object
print(VMScaleSetConvertToSinglePlacementGroupInput.to_json())

# convert the object into a dict
vm_scale_set_convert_to_single_placement_group_input_dict = vm_scale_set_convert_to_single_placement_group_input_instance.to_dict()
# create an instance of VMScaleSetConvertToSinglePlacementGroupInput from a dict
vm_scale_set_convert_to_single_placement_group_input_from_dict = VMScaleSetConvertToSinglePlacementGroupInput.from_dict(vm_scale_set_convert_to_single_placement_group_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


