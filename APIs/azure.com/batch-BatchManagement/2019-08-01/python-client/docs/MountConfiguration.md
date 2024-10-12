# MountConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_blob_file_system_configuration** | [**AzureBlobFileSystemConfiguration**](AzureBlobFileSystemConfiguration.md) |  | [optional] 
**azure_file_share_configuration** | [**AzureFileShareConfiguration**](AzureFileShareConfiguration.md) |  | [optional] 
**cifs_mount_configuration** | [**CIFSMountConfiguration**](CIFSMountConfiguration.md) |  | [optional] 
**nfs_mount_configuration** | [**NFSMountConfiguration**](NFSMountConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.mount_configuration import MountConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of MountConfiguration from a JSON string
mount_configuration_instance = MountConfiguration.from_json(json)
# print the JSON string representation of the object
print(MountConfiguration.to_json())

# convert the object into a dict
mount_configuration_dict = mount_configuration_instance.to_dict()
# create an instance of MountConfiguration from a dict
mount_configuration_from_dict = MountConfiguration.from_dict(mount_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


