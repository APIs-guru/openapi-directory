# Image

Overlaid jpeg image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alpha** | **float** | Target image opacity. Valid values are from &#x60;1.0&#x60; (solid, default) to &#x60;0.0&#x60; (transparent), exclusive. Set this to a value greater than &#x60;0.0&#x60;. | [optional] 
**resolution** | [**NormalizedCoordinate**](NormalizedCoordinate.md) |  | [optional] 
**uri** | **str** | Required. URI of the JPEG image in Cloud Storage. For example, &#x60;gs://bucket/inputs/image.jpeg&#x60;. JPEG is the only supported image type. | [optional] 

## Example

```python
from openapi_client.models.image import Image

# TODO update the JSON string below
json = "{}"
# create an instance of Image from a JSON string
image_instance = Image.from_json(json)
# print the JSON string representation of the object
print(Image.to_json())

# convert the object into a dict
image_dict = image_instance.to_dict()
# create an instance of Image from a dict
image_from_dict = Image.from_dict(image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


