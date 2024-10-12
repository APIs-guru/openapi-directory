# JpgImage

Describes the properties for producing a series of JPEG images from the input video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**layers** | [**List[JpgLayer]**](JpgLayer.md) | A collection of output JPEG image layers to be produced by the encoder. | [optional] 

## Example

```python
from openapi_client.models.jpg_image import JpgImage

# TODO update the JSON string below
json = "{}"
# create an instance of JpgImage from a JSON string
jpg_image_instance = JpgImage.from_json(json)
# print the JSON string representation of the object
print(JpgImage.to_json())

# convert the object into a dict
jpg_image_dict = jpg_image_instance.to_dict()
# create an instance of JpgImage from a dict
jpg_image_from_dict = JpgImage.from_dict(jpg_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


