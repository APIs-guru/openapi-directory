# MountVolumes

Details of volumes to mount on the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_blob_file_systems** | [**List[AzureBlobFileSystemReference]**](AzureBlobFileSystemReference.md) | References to Azure Blob FUSE that are to be mounted to the cluster nodes. | [optional] 
**azure_file_shares** | [**List[AzureFileShareReference]**](AzureFileShareReference.md) | References to Azure File Shares that are to be mounted to the cluster nodes. | [optional] 
**file_servers** | [**List[FileServerReference]**](FileServerReference.md) |  | [optional] 
**unmanaged_file_systems** | [**List[UnmanagedFileSystemReference]**](UnmanagedFileSystemReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.mount_volumes import MountVolumes

# TODO update the JSON string below
json = "{}"
# create an instance of MountVolumes from a JSON string
mount_volumes_instance = MountVolumes.from_json(json)
# print the JSON string representation of the object
print(MountVolumes.to_json())

# convert the object into a dict
mount_volumes_dict = mount_volumes_instance.to_dict()
# create an instance of MountVolumes from a dict
mount_volumes_from_dict = MountVolumes.from_dict(mount_volumes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


