# Volume


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_info** | [**VolumeAccessInfo**](VolumeAccessInfo.md) |  | [optional] 
**etag** | **str** | Opaque identifier for a specific version of a volume resource. (In LITE projection) | [optional] 
**id** | **str** | Unique identifier for a volume. (In LITE projection.) | [optional] 
**kind** | **str** | Resource type for a volume. (In LITE projection.) | [optional] 
**layer_info** | [**VolumeLayerInfo**](VolumeLayerInfo.md) |  | [optional] 
**recommended_info** | [**VolumeRecommendedInfo**](VolumeRecommendedInfo.md) |  | [optional] 
**sale_info** | [**VolumeSaleInfo**](VolumeSaleInfo.md) |  | [optional] 
**search_info** | [**VolumeSearchInfo**](VolumeSearchInfo.md) |  | [optional] 
**self_link** | **str** | URL to this resource. (In LITE projection.) | [optional] 
**user_info** | [**VolumeUserInfo**](VolumeUserInfo.md) |  | [optional] 
**volume_info** | [**VolumeVolumeInfo**](VolumeVolumeInfo.md) |  | [optional] 

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


