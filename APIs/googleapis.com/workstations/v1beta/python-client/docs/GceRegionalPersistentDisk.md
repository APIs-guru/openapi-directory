# GceRegionalPersistentDisk

A PersistentDirectory backed by a Compute Engine regional persistent disk. The persistent_directories field is repeated, but it may contain only one entry. It creates a [persistent disk](https://cloud.google.com/compute/docs/disks/persistent-disks) that mounts to the workstation VM at `/home` when the session starts and detaches when the session ends. If this field is empty, workstations created with this configuration do not have a persistent home directory.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_type** | **str** | Optional. The [type of the persistent disk](https://cloud.google.com/compute/docs/disks#disk-types) for the home directory. Defaults to &#x60;\&quot;pd-standard\&quot;&#x60;. | [optional] 
**fs_type** | **str** | Optional. Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if source_snapshot is set. Defaults to &#x60;\&quot;ext4\&quot;&#x60;. | [optional] 
**reclaim_policy** | **str** | Optional. Whether the persistent disk should be deleted when the workstation is deleted. Valid values are &#x60;DELETE&#x60; and &#x60;RETAIN&#x60;. Defaults to &#x60;DELETE&#x60;. | [optional] 
**size_gb** | **int** | Optional. The GB capacity of a persistent home directory for each workstation created with this configuration. Must be empty if source_snapshot is set. Valid values are &#x60;10&#x60;, &#x60;50&#x60;, &#x60;100&#x60;, &#x60;200&#x60;, &#x60;500&#x60;, or &#x60;1000&#x60;. Defaults to &#x60;200&#x60;. If less than &#x60;200&#x60; GB, the disk_type must be &#x60;\&quot;pd-balanced\&quot;&#x60; or &#x60;\&quot;pd-ssd\&quot;&#x60;. | [optional] 
**source_snapshot** | **str** | Optional. Name of the snapshot to use as the source for the disk. If set, size_gb and fs_type must be empty. | [optional] 

## Example

```python
from openapi_client.models.gce_regional_persistent_disk import GceRegionalPersistentDisk

# TODO update the JSON string below
json = "{}"
# create an instance of GceRegionalPersistentDisk from a JSON string
gce_regional_persistent_disk_instance = GceRegionalPersistentDisk.from_json(json)
# print the JSON string representation of the object
print(GceRegionalPersistentDisk.to_json())

# convert the object into a dict
gce_regional_persistent_disk_dict = gce_regional_persistent_disk_instance.to_dict()
# create an instance of GceRegionalPersistentDisk from a dict
gce_regional_persistent_disk_from_dict = GceRegionalPersistentDisk.from_dict(gce_regional_persistent_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


