# VolumeLayerInfo

What layers exist in this volume and high level information about them.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**layers** | [**List[VolumeLayerInfoLayersInner]**](VolumeLayerInfoLayersInner.md) | A layer should appear here if and only if the layer exists for this book. | [optional] 

## Example

```python
from openapi_client.models.volume_layer_info import VolumeLayerInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeLayerInfo from a JSON string
volume_layer_info_instance = VolumeLayerInfo.from_json(json)
# print the JSON string representation of the object
print(VolumeLayerInfo.to_json())

# convert the object into a dict
volume_layer_info_dict = volume_layer_info_instance.to_dict()
# create an instance of VolumeLayerInfo from a dict
volume_layer_info_from_dict = VolumeLayerInfo.from_dict(volume_layer_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


