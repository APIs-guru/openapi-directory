# StorageProfile

Specifies the storage settings for the virtual machine disks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_disks** | [**List[DataDisk]**](DataDisk.md) | Specifies the parameters that are used to add a data disk to a virtual machine. &lt;br&gt;&lt;br&gt; For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc&#x3D;%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). | [optional] 
**image_reference** | [**ImageReference**](ImageReference.md) |  | [optional] 
**os_disk** | [**OSDisk**](OSDisk.md) |  | [optional] 

## Example

```python
from openapi_client.models.storage_profile import StorageProfile

# TODO update the JSON string below
json = "{}"
# create an instance of StorageProfile from a JSON string
storage_profile_instance = StorageProfile.from_json(json)
# print the JSON string representation of the object
print(StorageProfile.to_json())

# convert the object into a dict
storage_profile_dict = storage_profile_instance.to_dict()
# create an instance of StorageProfile from a dict
storage_profile_from_dict = StorageProfile.from_dict(storage_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


