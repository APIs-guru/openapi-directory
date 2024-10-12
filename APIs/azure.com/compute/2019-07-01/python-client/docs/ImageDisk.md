# ImageDisk

Describes a image disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_uri** | **str** | The Virtual Hard Disk. | [optional] 
**caching** | **str** | Specifies the caching requirements. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; **None** &lt;br&gt;&lt;br&gt; **ReadOnly** &lt;br&gt;&lt;br&gt; **ReadWrite** &lt;br&gt;&lt;br&gt; Default: **None for Standard storage. ReadOnly for Premium storage** | [optional] 
**disk_encryption_set** | [**DiskEncryptionSetParameters**](DiskEncryptionSetParameters.md) |  | [optional] 
**disk_size_gb** | **int** | Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. &lt;br&gt;&lt;br&gt; This value cannot be larger than 1023 GB | [optional] 
**managed_disk** | [**SubResource**](SubResource.md) |  | [optional] 
**snapshot** | [**SubResource**](SubResource.md) |  | [optional] 
**storage_account_type** | [**StorageAccountType**](StorageAccountType.md) |  | [optional] 

## Example

```python
from openapi_client.models.image_disk import ImageDisk

# TODO update the JSON string below
json = "{}"
# create an instance of ImageDisk from a JSON string
image_disk_instance = ImageDisk.from_json(json)
# print the JSON string representation of the object
print(ImageDisk.to_json())

# convert the object into a dict
image_disk_dict = image_disk_instance.to_dict()
# create an instance of ImageDisk from a dict
image_disk_from_dict = ImageDisk.from_dict(image_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


