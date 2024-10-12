# ResizeLabVirtualMachineProperties

Request body for resizing a virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | **str** | Specifies the size of the virtual machine. | [optional] 

## Example

```python
from openapi_client.models.resize_lab_virtual_machine_properties import ResizeLabVirtualMachineProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ResizeLabVirtualMachineProperties from a JSON string
resize_lab_virtual_machine_properties_instance = ResizeLabVirtualMachineProperties.from_json(json)
# print the JSON string representation of the object
print(ResizeLabVirtualMachineProperties.to_json())

# convert the object into a dict
resize_lab_virtual_machine_properties_dict = resize_lab_virtual_machine_properties_instance.to_dict()
# create an instance of ResizeLabVirtualMachineProperties from a dict
resize_lab_virtual_machine_properties_from_dict = ResizeLabVirtualMachineProperties.from_dict(resize_lab_virtual_machine_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


