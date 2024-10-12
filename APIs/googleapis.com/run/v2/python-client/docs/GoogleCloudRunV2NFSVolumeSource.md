# GoogleCloudRunV2NFSVolumeSource

Represents an NFS mount.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | Path that is exported by the NFS server. | [optional] 
**read_only** | **bool** | If true, mount the NFS volume as read only | [optional] 
**server** | **str** | Hostname or IP address of the NFS server | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_nfs_volume_source import GoogleCloudRunV2NFSVolumeSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2NFSVolumeSource from a JSON string
google_cloud_run_v2_nfs_volume_source_instance = GoogleCloudRunV2NFSVolumeSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2NFSVolumeSource.to_json())

# convert the object into a dict
google_cloud_run_v2_nfs_volume_source_dict = google_cloud_run_v2_nfs_volume_source_instance.to_dict()
# create an instance of GoogleCloudRunV2NFSVolumeSource from a dict
google_cloud_run_v2_nfs_volume_source_from_dict = GoogleCloudRunV2NFSVolumeSource.from_dict(google_cloud_run_v2_nfs_volume_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


