# VirtualMachineImageResource

Virtual machine image resource information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The supported Azure location of the resource. | 
**name** | **str** | The name of the resource. | 
**tags** | **Dict[str, str]** | Specifies the tags that are assigned to the virtual machine. For more information about using tags, see [Using tags to organize your Azure resources](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-using-tags.md). | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_image_resource import VirtualMachineImageResource

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineImageResource from a JSON string
virtual_machine_image_resource_instance = VirtualMachineImageResource.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineImageResource.to_json())

# convert the object into a dict
virtual_machine_image_resource_dict = virtual_machine_image_resource_instance.to_dict()
# create an instance of VirtualMachineImageResource from a dict
virtual_machine_image_resource_from_dict = VirtualMachineImageResource.from_dict(virtual_machine_image_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


