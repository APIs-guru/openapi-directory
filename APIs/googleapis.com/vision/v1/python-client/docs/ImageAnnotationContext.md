# ImageAnnotationContext

If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_number** | **int** | If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image. | [optional] 
**uri** | **str** | The URI of the file used to produce the image. | [optional] 

## Example

```python
from openapi_client.models.image_annotation_context import ImageAnnotationContext

# TODO update the JSON string below
json = "{}"
# create an instance of ImageAnnotationContext from a JSON string
image_annotation_context_instance = ImageAnnotationContext.from_json(json)
# print the JSON string representation of the object
print(ImageAnnotationContext.to_json())

# convert the object into a dict
image_annotation_context_dict = image_annotation_context_instance.to_dict()
# create an instance of ImageAnnotationContext from a dict
image_annotation_context_from_dict = ImageAnnotationContext.from_dict(image_annotation_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


