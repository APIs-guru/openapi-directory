# BootDisk

The definition of a boot disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_encryption** | **str** | Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. | [optional] 
**disk_size_gb** | **str** | Optional. The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). If not specified, this defaults to the recommended value of 150GB. | [optional] 
**disk_type** | **str** | Optional. Indicates the type of the disk. | [optional] 
**kms_key** | **str** | Optional. Input only. The KMS key used to encrypt the disks, only applicable if disk_encryption is CMEK. Format: &#x60;projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}&#x60; Learn more about using your own encryption keys. | [optional] 

## Example

```python
from openapi_client.models.boot_disk import BootDisk

# TODO update the JSON string below
json = "{}"
# create an instance of BootDisk from a JSON string
boot_disk_instance = BootDisk.from_json(json)
# print the JSON string representation of the object
print(BootDisk.to_json())

# convert the object into a dict
boot_disk_dict = boot_disk_instance.to_dict()
# create an instance of BootDisk from a dict
boot_disk_from_dict = BootDisk.from_dict(boot_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


