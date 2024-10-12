# VolumeVolumeInfoDimensions

Physical dimensions of this volume.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **str** | Height or length of this volume (in cm). | [optional] 
**thickness** | **str** | Thickness of this volume (in cm). | [optional] 
**width** | **str** | Width of this volume (in cm). | [optional] 

## Example

```python
from openapi_client.models.volume_volume_info_dimensions import VolumeVolumeInfoDimensions

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeVolumeInfoDimensions from a JSON string
volume_volume_info_dimensions_instance = VolumeVolumeInfoDimensions.from_json(json)
# print the JSON string representation of the object
print(VolumeVolumeInfoDimensions.to_json())

# convert the object into a dict
volume_volume_info_dimensions_dict = volume_volume_info_dimensions_instance.to_dict()
# create an instance of VolumeVolumeInfoDimensions from a dict
volume_volume_info_dimensions_from_dict = VolumeVolumeInfoDimensions.from_dict(volume_volume_info_dimensions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


