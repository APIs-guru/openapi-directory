# VolumeModel

Properties of a volume.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_system** | **str** | Filesystem type. | [optional] 
**remaining_size_gb** | **int** | Amount of free space in GB. | [optional] 
**size_gb** | **int** | Total amount of space in GB. | [optional] 
**volume_label** | **str** | Volume label. | [optional] 

## Example

```python
from openapi_client.models.volume_model import VolumeModel

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeModel from a JSON string
volume_model_instance = VolumeModel.from_json(json)
# print the JSON string representation of the object
print(VolumeModel.to_json())

# convert the object into a dict
volume_model_dict = volume_model_instance.to_dict()
# create an instance of VolumeModel from a dict
volume_model_from_dict = VolumeModel.from_dict(volume_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


