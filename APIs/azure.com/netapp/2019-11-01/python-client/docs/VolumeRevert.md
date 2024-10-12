# VolumeRevert

revert a volume to the snapshot

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**snapshot_id** | **str** | Resource id of the snapshot | [optional] 

## Example

```python
from openapi_client.models.volume_revert import VolumeRevert

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeRevert from a JSON string
volume_revert_instance = VolumeRevert.from_json(json)
# print the JSON string representation of the object
print(VolumeRevert.to_json())

# convert the object into a dict
volume_revert_dict = volume_revert_instance.to_dict()
# create an instance of VolumeRevert from a dict
volume_revert_from_dict = VolumeRevert.from_dict(volume_revert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


