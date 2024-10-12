# VmwarePlatformDetails

VMware specific details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**esx_version** | **str** | ESX version. | [optional] 
**osid** | **str** | VMware os enum - https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html. | [optional] 
**vcenter_version** | **str** | vCenter version. | [optional] 

## Example

```python
from openapi_client.models.vmware_platform_details import VmwarePlatformDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VmwarePlatformDetails from a JSON string
vmware_platform_details_instance = VmwarePlatformDetails.from_json(json)
# print the JSON string representation of the object
print(VmwarePlatformDetails.to_json())

# convert the object into a dict
vmware_platform_details_dict = vmware_platform_details_instance.to_dict()
# create an instance of VmwarePlatformDetails from a dict
vmware_platform_details_from_dict = VmwarePlatformDetails.from_dict(vmware_platform_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


