# NFSVolumeSource

Represents a persistent volume that will be mounted using NFS. This volume will be shared between all instances of the Service and data will not be deleted when the instance is shut down.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | Path that is exported by the NFS server. | [optional] 
**read_only** | **bool** | If true, mount the NFS volume as read only. Defaults to false. | [optional] 
**server** | **str** | Hostname or IP address of the NFS server. | [optional] 

## Example

```python
from openapi_client.models.nfs_volume_source import NFSVolumeSource

# TODO update the JSON string below
json = "{}"
# create an instance of NFSVolumeSource from a JSON string
nfs_volume_source_instance = NFSVolumeSource.from_json(json)
# print the JSON string representation of the object
print(NFSVolumeSource.to_json())

# convert the object into a dict
nfs_volume_source_dict = nfs_volume_source_instance.to_dict()
# create an instance of NFSVolumeSource from a dict
nfs_volume_source_from_dict = NFSVolumeSource.from_dict(nfs_volume_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


