# CustomImagePropertiesFromVmFragment

Properties for creating a custom image from a virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linux_os_info** | [**LinuxOsInfoFragment**](LinuxOsInfoFragment.md) |  | [optional] 
**source_vm_id** | **str** | The source vm identifier. | [optional] 
**windows_os_info** | [**WindowsOsInfoFragment**](WindowsOsInfoFragment.md) |  | [optional] 

## Example

```python
from openapi_client.models.custom_image_properties_from_vm_fragment import CustomImagePropertiesFromVmFragment

# TODO update the JSON string below
json = "{}"
# create an instance of CustomImagePropertiesFromVmFragment from a JSON string
custom_image_properties_from_vm_fragment_instance = CustomImagePropertiesFromVmFragment.from_json(json)
# print the JSON string representation of the object
print(CustomImagePropertiesFromVmFragment.to_json())

# convert the object into a dict
custom_image_properties_from_vm_fragment_dict = custom_image_properties_from_vm_fragment_instance.to_dict()
# create an instance of CustomImagePropertiesFromVmFragment from a dict
custom_image_properties_from_vm_fragment_from_dict = CustomImagePropertiesFromVmFragment.from_dict(custom_image_properties_from_vm_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


