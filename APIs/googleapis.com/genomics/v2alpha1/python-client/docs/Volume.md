# Volume

Carries information about storage that can be attached to a VM. Specify either `Volume` or `Disk`, but not both.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**existing_disk** | [**ExistingDisk**](ExistingDisk.md) |  | [optional] 
**nfs_mount** | [**NFSMount**](NFSMount.md) |  | [optional] 
**persistent_disk** | [**PersistentDisk**](PersistentDisk.md) |  | [optional] 
**volume** | **str** | A user-supplied name for the volume. Used when mounting the volume into &#x60;Actions&#x60;. The name must contain only upper and lowercase alphanumeric characters and hyphens and cannot start with a hyphen. | [optional] 

## Example

```python
from openapi_client.models.volume import Volume

# TODO update the JSON string below
json = "{}"
# create an instance of Volume from a JSON string
volume_instance = Volume.from_json(json)
# print the JSON string representation of the object
print(Volume.to_json())

# convert the object into a dict
volume_dict = volume_instance.to_dict()
# create an instance of Volume from a dict
volume_from_dict = Volume.from_dict(volume_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


