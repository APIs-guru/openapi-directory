# VolumeannotationContentRanges

The content ranges to identify the selected text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cfi_range** | [**BooksAnnotationsRange**](BooksAnnotationsRange.md) |  | [optional] 
**content_version** | **str** | Content version applicable to ranges below. | [optional] 
**gb_image_range** | [**BooksAnnotationsRange**](BooksAnnotationsRange.md) |  | [optional] 
**gb_text_range** | [**BooksAnnotationsRange**](BooksAnnotationsRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.volumeannotation_content_ranges import VolumeannotationContentRanges

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeannotationContentRanges from a JSON string
volumeannotation_content_ranges_instance = VolumeannotationContentRanges.from_json(json)
# print the JSON string representation of the object
print(VolumeannotationContentRanges.to_json())

# convert the object into a dict
volumeannotation_content_ranges_dict = volumeannotation_content_ranges_instance.to_dict()
# create an instance of VolumeannotationContentRanges from a dict
volumeannotation_content_ranges_from_dict = VolumeannotationContentRanges.from_dict(volumeannotation_content_ranges_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


