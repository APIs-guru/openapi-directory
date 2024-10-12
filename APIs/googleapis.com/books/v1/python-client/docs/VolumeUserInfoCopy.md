# VolumeUserInfoCopy

Copy/Paste accounting information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_character_count** | **int** |  | [optional] 
**limit_type** | **str** |  | [optional] 
**remaining_character_count** | **int** |  | [optional] 
**updated** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.volume_user_info_copy import VolumeUserInfoCopy

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeUserInfoCopy from a JSON string
volume_user_info_copy_instance = VolumeUserInfoCopy.from_json(json)
# print the JSON string representation of the object
print(VolumeUserInfoCopy.to_json())

# convert the object into a dict
volume_user_info_copy_dict = volume_user_info_copy_instance.to_dict()
# create an instance of VolumeUserInfoCopy from a dict
volume_user_info_copy_from_dict = VolumeUserInfoCopy.from_dict(volume_user_info_copy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


