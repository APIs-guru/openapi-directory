# CustomImagePropertiesFromVm

Properties for creating a custom image from a virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linux_os_info** | [**LinuxOsInfo**](LinuxOsInfo.md) |  | [optional] 
**source_vm_id** | **str** | The source vm identifier. | [optional] 
**windows_os_info** | [**WindowsOsInfo**](WindowsOsInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.custom_image_properties_from_vm import CustomImagePropertiesFromVm

# TODO update the JSON string below
json = "{}"
# create an instance of CustomImagePropertiesFromVm from a JSON string
custom_image_properties_from_vm_instance = CustomImagePropertiesFromVm.from_json(json)
# print the JSON string representation of the object
print(CustomImagePropertiesFromVm.to_json())

# convert the object into a dict
custom_image_properties_from_vm_dict = custom_image_properties_from_vm_instance.to_dict()
# create an instance of CustomImagePropertiesFromVm from a dict
custom_image_properties_from_vm_from_dict = CustomImagePropertiesFromVm.from_dict(custom_image_properties_from_vm_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


