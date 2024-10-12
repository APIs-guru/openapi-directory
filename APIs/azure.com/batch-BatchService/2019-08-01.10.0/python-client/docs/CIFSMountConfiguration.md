# CIFSMountConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mount_options** | **str** | These are &#39;net use&#39; options in Windows and &#39;mount&#39; options in Linux. | [optional] 
**password** | **str** |  | 
**relative_mount_path** | **str** | All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable. | 
**source** | **str** |  | 
**username** | **str** |  | 

## Example

```python
from openapi_client.models.cifs_mount_configuration import CIFSMountConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of CIFSMountConfiguration from a JSON string
cifs_mount_configuration_instance = CIFSMountConfiguration.from_json(json)
# print the JSON string representation of the object
print(CIFSMountConfiguration.to_json())

# convert the object into a dict
cifs_mount_configuration_dict = cifs_mount_configuration_instance.to_dict()
# create an instance of CIFSMountConfiguration from a dict
cifs_mount_configuration_from_dict = CIFSMountConfiguration.from_dict(cifs_mount_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


