# DataDisk

An instance-attached disk resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_encryption** | **str** | Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. | [optional] 
**disk_size_gb** | **str** | Optional. The size of the disk in GB attached to this VM instance, up to a maximum of 64000 GB (64 TB). If not specified, this defaults to 100. | [optional] 
**disk_type** | **str** | Optional. Input only. Indicates the type of the disk. | [optional] 
**kms_key** | **str** | Optional. Input only. The KMS key used to encrypt the disks, only applicable if disk_encryption is CMEK. Format: &#x60;projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}&#x60; Learn more about using your own encryption keys. | [optional] 

## Example

```python
from openapi_client.models.data_disk import DataDisk

# TODO update the JSON string below
json = "{}"
# create an instance of DataDisk from a JSON string
data_disk_instance = DataDisk.from_json(json)
# print the JSON string representation of the object
print(DataDisk.to_json())

# convert the object into a dict
data_disk_dict = data_disk_instance.to_dict()
# create an instance of DataDisk from a dict
data_disk_from_dict = DataDisk.from_dict(data_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


