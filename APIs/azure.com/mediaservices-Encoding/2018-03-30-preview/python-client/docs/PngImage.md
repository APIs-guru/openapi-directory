# PngImage

Describes the properties for producing a series of PNG images from the input video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**layers** | [**List[PngLayer]**](PngLayer.md) | A collection of output PNG image layers to be produced by the encoder. | [optional] 

## Example

```python
from openapi_client.models.png_image import PngImage

# TODO update the JSON string below
json = "{}"
# create an instance of PngImage from a JSON string
png_image_instance = PngImage.from_json(json)
# print the JSON string representation of the object
print(PngImage.to_json())

# convert the object into a dict
png_image_dict = png_image_instance.to_dict()
# create an instance of PngImage from a dict
png_image_from_dict = PngImage.from_dict(png_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


