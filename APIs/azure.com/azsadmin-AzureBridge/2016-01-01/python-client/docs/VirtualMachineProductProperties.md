# VirtualMachineProductProperties

Product information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_disk_images** | [**List[DataDiskImage]**](DataDiskImage.md) | List of attached data disks. | [optional] [readonly] 
**os_disk_image** | [**OsDiskImage**](OsDiskImage.md) |  | [optional] 
**version** | **str** | Specifies product version. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_product_properties import VirtualMachineProductProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineProductProperties from a JSON string
virtual_machine_product_properties_instance = VirtualMachineProductProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineProductProperties.to_json())

# convert the object into a dict
virtual_machine_product_properties_dict = virtual_machine_product_properties_instance.to_dict()
# create an instance of VirtualMachineProductProperties from a dict
virtual_machine_product_properties_from_dict = VirtualMachineProductProperties.from_dict(virtual_machine_product_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


