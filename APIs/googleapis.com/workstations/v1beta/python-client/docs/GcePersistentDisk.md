# GcePersistentDisk

An EphemeralDirectory is backed by a Compute Engine persistent disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_type** | **str** | Optional. Type of the disk to use. Defaults to &#x60;\&quot;pd-standard\&quot;&#x60;. | [optional] 
**read_only** | **bool** | Optional. Whether the disk is read only. If true, the disk may be shared by multiple VMs and source_snapshot must be set. | [optional] 
**source_image** | **str** | Optional. Name of the disk image to use as the source for the disk. Must be empty if source_snapshot is set. Updating source_image will update content in the ephemeral directory after the workstation is restarted. This field is mutable. | [optional] 
**source_snapshot** | **str** | Optional. Name of the snapshot to use as the source for the disk. Must be empty if source_image is set. Must be empty if read_only is false. Updating source_snapshot will update content in the ephemeral directory after the workstation is restarted. This field is mutable. | [optional] 

## Example

```python
from openapi_client.models.gce_persistent_disk import GcePersistentDisk

# TODO update the JSON string below
json = "{}"
# create an instance of GcePersistentDisk from a JSON string
gce_persistent_disk_instance = GcePersistentDisk.from_json(json)
# print the JSON string representation of the object
print(GcePersistentDisk.to_json())

# convert the object into a dict
gce_persistent_disk_dict = gce_persistent_disk_instance.to_dict()
# create an instance of GcePersistentDisk from a dict
gce_persistent_disk_from_dict = GcePersistentDisk.from_dict(gce_persistent_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


