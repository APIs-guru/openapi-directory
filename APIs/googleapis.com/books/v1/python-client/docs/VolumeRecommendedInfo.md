# VolumeRecommendedInfo

Recommendation related information for this volume.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explanation** | **str** | A text explaining why this volume is recommended. | [optional] 

## Example

```python
from openapi_client.models.volume_recommended_info import VolumeRecommendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeRecommendedInfo from a JSON string
volume_recommended_info_instance = VolumeRecommendedInfo.from_json(json)
# print the JSON string representation of the object
print(VolumeRecommendedInfo.to_json())

# convert the object into a dict
volume_recommended_info_dict = volume_recommended_info_instance.to_dict()
# create an instance of VolumeRecommendedInfo from a dict
volume_recommended_info_from_dict = VolumeRecommendedInfo.from_dict(volume_recommended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


