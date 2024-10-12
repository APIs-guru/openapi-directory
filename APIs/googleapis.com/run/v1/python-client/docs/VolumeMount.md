# VolumeMount

VolumeMount describes a mounting of a Volume within a container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mount_path** | **str** | Required. Path within the container at which the volume should be mounted. Must not contain &#39;:&#39;. | [optional] 
**name** | **str** | Required. The name of the volume. There must be a corresponding Volume with the same name. | [optional] 
**read_only** | **bool** | Sets the mount to be read-only or read-write. Not used by Cloud Run. | [optional] 
**sub_path** | **str** | Path within the volume from which the container&#39;s volume should be mounted. Defaults to \&quot;\&quot; (volume&#39;s root). | [optional] 

## Example

```python
from openapi_client.models.volume_mount import VolumeMount

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeMount from a JSON string
volume_mount_instance = VolumeMount.from_json(json)
# print the JSON string representation of the object
print(VolumeMount.to_json())

# convert the object into a dict
volume_mount_dict = volume_mount_instance.to_dict()
# create an instance of VolumeMount from a dict
volume_mount_from_dict = VolumeMount.from_dict(volume_mount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


