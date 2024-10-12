# DiskPropertiesFragment

Properties of a disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_blob_name** | **str** | When backed by a blob, the name of the VHD blob without extension. | [optional] 
**disk_size_gi_b** | **int** | The size of the disk in GibiBytes. | [optional] 
**disk_type** | **str** | The storage type for the disk (i.e. Standard, Premium). | [optional] 
**disk_uri** | **str** | When backed by a blob, the URI of underlying blob. | [optional] 
**host_caching** | **str** | The host caching policy of the disk (i.e. None, ReadOnly, ReadWrite). | [optional] 
**leased_by_lab_vm_id** | **str** | The resource ID of the VM to which this disk is leased. | [optional] 
**managed_disk_id** | **str** | When backed by managed disk, this is the ID of the compute disk resource. | [optional] 

## Example

```python
from openapi_client.models.disk_properties_fragment import DiskPropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of DiskPropertiesFragment from a JSON string
disk_properties_fragment_instance = DiskPropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(DiskPropertiesFragment.to_json())

# convert the object into a dict
disk_properties_fragment_dict = disk_properties_fragment_instance.to_dict()
# create an instance of DiskPropertiesFragment from a dict
disk_properties_fragment_from_dict = DiskPropertiesFragment.from_dict(disk_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


