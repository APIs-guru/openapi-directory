# ImageStorageProfile

Describes a storage profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_disks** | [**List[ImageDataDisk]**](ImageDataDisk.md) | Specifies the parameters that are used to add a data disk to a virtual machine. &lt;br&gt;&lt;br&gt; For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc&#x3D;%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). | [optional] 
**os_disk** | [**ImageOSDisk**](ImageOSDisk.md) |  | [optional] 
**zone_resilient** | **bool** | Specifies whether an image is zone resilient or not. Default is false. Zone resilient images can be created only in regions that provide Zone Redundant Storage (ZRS). | [optional] 

## Example

```python
from openapi_client.models.image_storage_profile import ImageStorageProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ImageStorageProfile from a JSON string
image_storage_profile_instance = ImageStorageProfile.from_json(json)
# print the JSON string representation of the object
print(ImageStorageProfile.to_json())

# convert the object into a dict
image_storage_profile_dict = image_storage_profile_instance.to_dict()
# create an instance of ImageStorageProfile from a dict
image_storage_profile_from_dict = ImageStorageProfile.from_dict(image_storage_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


