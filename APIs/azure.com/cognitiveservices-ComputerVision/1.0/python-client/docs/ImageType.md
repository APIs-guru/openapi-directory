# ImageType

An object providing possible image types and matching confidence levels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clip_art_type** | **float** | Confidence level that the image is a clip art. | [optional] 
**line_drawing_type** | **float** | Confidence level that the image is a line drawing. | [optional] 

## Example

```python
from openapi_client.models.image_type import ImageType

# TODO update the JSON string below
json = "{}"
# create an instance of ImageType from a JSON string
image_type_instance = ImageType.from_json(json)
# print the JSON string representation of the object
print(ImageType.to_json())

# convert the object into a dict
image_type_dict = image_type_instance.to_dict()
# create an instance of ImageType from a dict
image_type_from_dict = ImageType.from_dict(image_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


