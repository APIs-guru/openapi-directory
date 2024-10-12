# GoogleCloudAiplatformV1beta1NfsMount

Represents a mount configuration for Network File System (NFS) to mount.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mount_point** | **str** | Required. Destination mount path. The NFS will be mounted for the user under /mnt/nfs/ | [optional] 
**path** | **str** | Required. Source path exported from NFS server. Has to start with &#39;/&#39;, and combined with the ip address, it indicates the source mount path in the form of &#x60;server:path&#x60; | [optional] 
**server** | **str** | Required. IP address of the NFS server. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_nfs_mount import GoogleCloudAiplatformV1beta1NfsMount

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1NfsMount from a JSON string
google_cloud_aiplatform_v1beta1_nfs_mount_instance = GoogleCloudAiplatformV1beta1NfsMount.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1NfsMount.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_nfs_mount_dict = google_cloud_aiplatform_v1beta1_nfs_mount_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1NfsMount from a dict
google_cloud_aiplatform_v1beta1_nfs_mount_from_dict = GoogleCloudAiplatformV1beta1NfsMount.from_dict(google_cloud_aiplatform_v1beta1_nfs_mount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


