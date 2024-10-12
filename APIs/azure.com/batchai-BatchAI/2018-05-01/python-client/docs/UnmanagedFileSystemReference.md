# UnmanagedFileSystemReference

Unmanaged file system mounting configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mount_command** | **str** | Mount command line. Note, Batch AI will append mount path to the command on its own. | 
**relative_mount_path** | **str** | The relative path on the compute node where the unmanaged file system will be mounted. Note that all cluster level unmanaged file systems will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level unmanaged file systems will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT. | 

## Example

```python
from openapi_client.models.unmanaged_file_system_reference import UnmanagedFileSystemReference

# TODO update the JSON string below
json = "{}"
# create an instance of UnmanagedFileSystemReference from a JSON string
unmanaged_file_system_reference_instance = UnmanagedFileSystemReference.from_json(json)
# print the JSON string representation of the object
print(UnmanagedFileSystemReference.to_json())

# convert the object into a dict
unmanaged_file_system_reference_dict = unmanaged_file_system_reference_instance.to_dict()
# create an instance of UnmanagedFileSystemReference from a dict
unmanaged_file_system_reference_from_dict = UnmanagedFileSystemReference.from_dict(unmanaged_file_system_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


