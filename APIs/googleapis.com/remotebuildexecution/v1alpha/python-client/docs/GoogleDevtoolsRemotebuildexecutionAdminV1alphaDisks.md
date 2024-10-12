# GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisks

Disks defines the disks that would be attached to the workers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**docker_root_disk** | [**GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksPersistentDisk**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksPersistentDisk.md) |  | [optional] 
**local_ssd** | [**GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksLocalSSD**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisksLocalSSD.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildexecution_admin_v1alpha_disks import GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisks

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisks from a JSON string
google_devtools_remotebuildexecution_admin_v1alpha_disks_instance = GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisks.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisks.to_json())

# convert the object into a dict
google_devtools_remotebuildexecution_admin_v1alpha_disks_dict = google_devtools_remotebuildexecution_admin_v1alpha_disks_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisks from a dict
google_devtools_remotebuildexecution_admin_v1alpha_disks_from_dict = GoogleDevtoolsRemotebuildexecutionAdminV1alphaDisks.from_dict(google_devtools_remotebuildexecution_admin_v1alpha_disks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


