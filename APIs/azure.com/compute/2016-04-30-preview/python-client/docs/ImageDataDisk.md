# ImageDataDisk

Describes a data disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_uri** | **str** | The Virtual Hard Disk. | [optional] 
**caching** | **str** | Specifies the caching requirements. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; **None** &lt;br&gt;&lt;br&gt; **ReadOnly** &lt;br&gt;&lt;br&gt; **ReadWrite** &lt;br&gt;&lt;br&gt; Default: **None for Standard storage. ReadOnly for Premium storage** | [optional] 
**disk_size_gb** | **int** | Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. &lt;br&gt;&lt;br&gt; This value cannot be larger than 1023 GB | [optional] 
**lun** | **int** | Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. | 
**managed_disk** | [**SubResource**](SubResource.md) |  | [optional] 
**snapshot** | [**SubResource**](SubResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.image_data_disk import ImageDataDisk

# TODO update the JSON string below
json = "{}"
# create an instance of ImageDataDisk from a JSON string
image_data_disk_instance = ImageDataDisk.from_json(json)
# print the JSON string representation of the object
print(ImageDataDisk.to_json())

# convert the object into a dict
image_data_disk_dict = image_data_disk_instance.to_dict()
# create an instance of ImageDataDisk from a dict
image_data_disk_from_dict = ImageDataDisk.from_dict(image_data_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


