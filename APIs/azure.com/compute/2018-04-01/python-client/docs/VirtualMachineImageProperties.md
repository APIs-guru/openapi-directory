# VirtualMachineImageProperties

Describes the properties of a Virtual Machine Image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_disk_images** | [**List[DataDiskImage]**](DataDiskImage.md) |  | [optional] 
**os_disk_image** | [**OSDiskImage**](OSDiskImage.md) |  | [optional] 
**plan** | [**PurchasePlan**](PurchasePlan.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_image_properties import VirtualMachineImageProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineImageProperties from a JSON string
virtual_machine_image_properties_instance = VirtualMachineImageProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineImageProperties.to_json())

# convert the object into a dict
virtual_machine_image_properties_dict = virtual_machine_image_properties_instance.to_dict()
# create an instance of VirtualMachineImageProperties from a dict
virtual_machine_image_properties_from_dict = VirtualMachineImageProperties.from_dict(virtual_machine_image_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


