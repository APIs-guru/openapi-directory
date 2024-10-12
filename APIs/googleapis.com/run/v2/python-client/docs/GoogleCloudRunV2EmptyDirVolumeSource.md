# GoogleCloudRunV2EmptyDirVolumeSource

In memory (tmpfs) ephemeral storage. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**medium** | **str** | The medium on which the data is stored. Acceptable values today is only MEMORY or none. When none, the default will currently be backed by memory but could change over time. +optional | [optional] 
**size_limit** | **str** | Limit on the storage usable by this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers. The default is nil which means that the limit is undefined. More info: https://cloud.google.com/run/docs/configuring/in-memory-volumes#configure-volume. Info in Kubernetes: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_empty_dir_volume_source import GoogleCloudRunV2EmptyDirVolumeSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2EmptyDirVolumeSource from a JSON string
google_cloud_run_v2_empty_dir_volume_source_instance = GoogleCloudRunV2EmptyDirVolumeSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2EmptyDirVolumeSource.to_json())

# convert the object into a dict
google_cloud_run_v2_empty_dir_volume_source_dict = google_cloud_run_v2_empty_dir_volume_source_instance.to_dict()
# create an instance of GoogleCloudRunV2EmptyDirVolumeSource from a dict
google_cloud_run_v2_empty_dir_volume_source_from_dict = GoogleCloudRunV2EmptyDirVolumeSource.from_dict(google_cloud_run_v2_empty_dir_volume_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


