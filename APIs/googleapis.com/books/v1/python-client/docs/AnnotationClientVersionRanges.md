# AnnotationClientVersionRanges

Selection ranges sent from the client.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cfi_range** | [**BooksAnnotationsRange**](BooksAnnotationsRange.md) |  | [optional] 
**content_version** | **str** | Content version the client sent in. | [optional] 
**gb_image_range** | [**BooksAnnotationsRange**](BooksAnnotationsRange.md) |  | [optional] 
**gb_text_range** | [**BooksAnnotationsRange**](BooksAnnotationsRange.md) |  | [optional] 
**image_cfi_range** | [**BooksAnnotationsRange**](BooksAnnotationsRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.annotation_client_version_ranges import AnnotationClientVersionRanges

# TODO update the JSON string below
json = "{}"
# create an instance of AnnotationClientVersionRanges from a JSON string
annotation_client_version_ranges_instance = AnnotationClientVersionRanges.from_json(json)
# print the JSON string representation of the object
print(AnnotationClientVersionRanges.to_json())

# convert the object into a dict
annotation_client_version_ranges_dict = annotation_client_version_ranges_instance.to_dict()
# create an instance of AnnotationClientVersionRanges from a dict
annotation_client_version_ranges_from_dict = AnnotationClientVersionRanges.from_dict(annotation_client_version_ranges_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


