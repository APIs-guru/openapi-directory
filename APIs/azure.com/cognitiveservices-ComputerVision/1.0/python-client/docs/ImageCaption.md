# ImageCaption

An image caption, i.e. a brief description of what the image depicts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | The level of confidence the service has in the caption | [optional] 
**text** | **str** | The text of the caption | [optional] 

## Example

```python
from openapi_client.models.image_caption import ImageCaption

# TODO update the JSON string below
json = "{}"
# create an instance of ImageCaption from a JSON string
image_caption_instance = ImageCaption.from_json(json)
# print the JSON string representation of the object
print(ImageCaption.to_json())

# convert the object into a dict
image_caption_dict = image_caption_instance.to_dict()
# create an instance of ImageCaption from a dict
image_caption_from_dict = ImageCaption.from_dict(image_caption_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


