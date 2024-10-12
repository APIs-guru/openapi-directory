# AnnotationCurrentVersionRanges

Selection ranges for the most recent content version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cfi_range** | [**BooksAnnotationsRange**](BooksAnnotationsRange.md) |  | [optional] 
**content_version** | **str** | Content version applicable to ranges below. | [optional] 
**gb_image_range** | [**BooksAnnotationsRange**](BooksAnnotationsRange.md) |  | [optional] 
**gb_text_range** | [**BooksAnnotationsRange**](BooksAnnotationsRange.md) |  | [optional] 
**image_cfi_range** | [**BooksAnnotationsRange**](BooksAnnotationsRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.annotation_current_version_ranges import AnnotationCurrentVersionRanges

# TODO update the JSON string below
json = "{}"
# create an instance of AnnotationCurrentVersionRanges from a JSON string
annotation_current_version_ranges_instance = AnnotationCurrentVersionRanges.from_json(json)
# print the JSON string representation of the object
print(AnnotationCurrentVersionRanges.to_json())

# convert the object into a dict
annotation_current_version_ranges_dict = annotation_current_version_ranges_instance.to_dict()
# create an instance of AnnotationCurrentVersionRanges from a dict
annotation_current_version_ranges_from_dict = AnnotationCurrentVersionRanges.from_dict(annotation_current_version_ranges_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


