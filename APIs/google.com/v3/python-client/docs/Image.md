# Image

A single image in a VR Listing. Title and gallery URL are stored per locale. NEXT ID: 4

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gallery_uri** | [**List[LocalizedText]**](LocalizedText.md) | URL that is deeplink to the image in a gallery (or a webpage). | [optional] 
**title** | [**List[LocalizedText]**](LocalizedText.md) | Title of the image. | [optional] 
**uri** | **str** | URL that points to the binary image content directly. | [optional] 

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


