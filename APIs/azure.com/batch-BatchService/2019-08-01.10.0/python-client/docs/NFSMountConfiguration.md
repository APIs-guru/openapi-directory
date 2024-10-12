# NFSMountConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mount_options** | **str** | These are &#39;net use&#39; options in Windows and &#39;mount&#39; options in Linux. | [optional] 
**relative_mount_path** | **str** | All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable. | 
**source** | **str** |  | 

## Example

```python
from openapi_client.models.nfs_mount_configuration import NFSMountConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of NFSMountConfiguration from a JSON string
nfs_mount_configuration_instance = NFSMountConfiguration.from_json(json)
# print the JSON string representation of the object
print(NFSMountConfiguration.to_json())

# convert the object into a dict
nfs_mount_configuration_dict = nfs_mount_configuration_instance.to_dict()
# create an instance of NFSMountConfiguration from a dict
nfs_mount_configuration_from_dict = NFSMountConfiguration.from_dict(nfs_mount_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


