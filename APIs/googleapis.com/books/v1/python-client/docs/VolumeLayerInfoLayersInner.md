# VolumeLayerInfoLayersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**layer_id** | **str** | The layer id of this layer (e.g. \&quot;geo\&quot;). | [optional] 
**volume_annotations_version** | **str** | The current version of this layer&#39;s volume annotations. Note that this version applies only to the data in the books.layers.volumeAnnotations.* responses. The actual annotation data is versioned separately. | [optional] 

## Example

```python
from openapi_client.models.volume_layer_info_layers_inner import VolumeLayerInfoLayersInner

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeLayerInfoLayersInner from a JSON string
volume_layer_info_layers_inner_instance = VolumeLayerInfoLayersInner.from_json(json)
# print the JSON string representation of the object
print(VolumeLayerInfoLayersInner.to_json())

# convert the object into a dict
volume_layer_info_layers_inner_dict = volume_layer_info_layers_inner_instance.to_dict()
# create an instance of VolumeLayerInfoLayersInner from a dict
volume_layer_info_layers_inner_from_dict = VolumeLayerInfoLayersInner.from_dict(volume_layer_info_layers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


