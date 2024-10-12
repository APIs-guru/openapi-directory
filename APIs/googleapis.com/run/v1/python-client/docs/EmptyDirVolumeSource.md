# EmptyDirVolumeSource

In memory (tmpfs) ephemeral storage. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**medium** | **str** | The medium on which the data is stored. The default is \&quot;\&quot; which means to use the node&#39;s default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir | [optional] 
**size_limit** | **str** | Limit on the storage usable by this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers. The default is nil which means that the limit is undefined. More info: https://cloud.google.com/run/docs/configuring/in-memory-volumes#configure-volume. Info in Kubernetes: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir | [optional] 

## Example

```python
from openapi_client.models.empty_dir_volume_source import EmptyDirVolumeSource

# TODO update the JSON string below
json = "{}"
# create an instance of EmptyDirVolumeSource from a JSON string
empty_dir_volume_source_instance = EmptyDirVolumeSource.from_json(json)
# print the JSON string representation of the object
print(EmptyDirVolumeSource.to_json())

# convert the object into a dict
empty_dir_volume_source_dict = empty_dir_volume_source_instance.to_dict()
# create an instance of EmptyDirVolumeSource from a dict
empty_dir_volume_source_from_dict = EmptyDirVolumeSource.from_dict(empty_dir_volume_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


