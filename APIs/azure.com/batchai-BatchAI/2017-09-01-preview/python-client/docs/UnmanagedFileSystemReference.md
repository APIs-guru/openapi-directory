# UnmanagedFileSystemReference

Details of the file system to mount on the compute cluster nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mount_command** | **str** |  | 
**relative_mount_path** | **str** | Note that all file shares will be mounted under $AZ_BATCHAI_MOUNT_ROOT location. | 

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


