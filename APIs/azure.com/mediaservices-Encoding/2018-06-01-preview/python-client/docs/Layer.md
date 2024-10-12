# Layer

The encoder can be configured to produce video and/or images (thumbnails) at different resolutions, by specifying a layer for each desired resolution. A layer represents the properties for the video or image at a resolution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** | The discriminator for derived types. | 
**height** | **str** | The height of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in height as the input. | [optional] 
**label** | **str** | The alphanumeric label for this layer, which can be used in multiplexing different video and audio layers, or in naming the output file. | [optional] 
**width** | **str** | The width of the output video for this layer. The value can be absolute (in pixels) or relative (in percentage). For example 50% means the output video has half as many pixels in width as the input. | [optional] 

## Example

```python
from openapi_client.models.layer import Layer

# TODO update the JSON string below
json = "{}"
# create an instance of Layer from a JSON string
layer_instance = Layer.from_json(json)
# print the JSON string representation of the object
print(Layer.to_json())

# convert the object into a dict
layer_dict = layer_instance.to_dict()
# create an instance of Layer from a dict
layer_from_dict = Layer.from_dict(layer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


