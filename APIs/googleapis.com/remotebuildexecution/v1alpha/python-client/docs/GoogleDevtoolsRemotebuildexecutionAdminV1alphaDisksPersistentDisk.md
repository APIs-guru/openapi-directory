# GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksPersistentDisk

PersistentDisk specifies how to attach a persistent disk to the workers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_size_gb** | **str** | Required. Size of the disk in GB. | [optional] 
**disk_type** | **str** | Required. Type of disk attached (supported types are pd-standard and pd-ssd). | [optional] 
**source_image** | **str** | Required. VM image to use for the disk. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildexecution_admin_v1alpha_disks_persistent_disk import GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksPersistentDisk

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksPersistentDisk from a JSON string
google_devtools_remotebuildexecution_admin_v1alpha_disks_persistent_disk_instance = GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksPersistentDisk.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksPersistentDisk.to_json())

# convert the object into a dict
google_devtools_remotebuildexecution_admin_v1alpha_disks_persistent_disk_dict = google_devtools_remotebuildexecution_admin_v1alpha_disks_persistent_disk_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksPersistentDisk from a dict
google_devtools_remotebuildexecution_admin_v1alpha_disks_persistent_disk_from_dict = GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksPersistentDisk.from_dict(google_devtools_remotebuildexecution_admin_v1alpha_disks_persistent_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


