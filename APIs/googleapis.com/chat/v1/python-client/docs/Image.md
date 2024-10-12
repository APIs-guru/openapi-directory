# Image

An image that's specified by a URL and can have an `onclick` action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect_ratio** | **float** | The aspect ratio of this image (width and height). This field lets you reserve the right height for the image while waiting for it to load. It&#39;s not meant to override the built-in aspect ratio of the image. If unset, the server fills it by prefetching the image. | [optional] 
**image_url** | **str** | The URL of the image. | [optional] 
**on_click** | [**OnClick**](OnClick.md) |  | [optional] 

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


