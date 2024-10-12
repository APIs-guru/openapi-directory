# ImageOSDisk

Describes an Operating System disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_uri** | **str** | The Virtual Hard Disk. | [optional] 
**caching** | **str** | Specifies the caching requirements. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; **None** &lt;br&gt;&lt;br&gt; **ReadOnly** &lt;br&gt;&lt;br&gt; **ReadWrite** &lt;br&gt;&lt;br&gt; Default: **None for Standard storage. ReadOnly for Premium storage** | [optional] 
**disk_size_gb** | **int** | Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. &lt;br&gt;&lt;br&gt; This value cannot be larger than 1023 GB | [optional] 
**managed_disk** | [**SubResource**](SubResource.md) |  | [optional] 
**os_state** | **str** | The OS State. | 
**os_type** | **str** | This property allows you to specify the type of the OS that is included in the disk if creating a VM from a custom image. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; **Windows** &lt;br&gt;&lt;br&gt; **Linux** | 
**snapshot** | [**SubResource**](SubResource.md) |  | [optional] 
**storage_account_type** | [**StorageAccountType**](StorageAccountType.md) |  | [optional] 

## Example

```python
from openapi_client.models.image_os_disk import ImageOSDisk

# TODO update the JSON string below
json = "{}"
# create an instance of ImageOSDisk from a JSON string
image_os_disk_instance = ImageOSDisk.from_json(json)
# print the JSON string representation of the object
print(ImageOSDisk.to_json())

# convert the object into a dict
image_os_disk_dict = image_os_disk_instance.to_dict()
# create an instance of ImageOSDisk from a dict
image_os_disk_from_dict = ImageOSDisk.from_dict(image_os_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


