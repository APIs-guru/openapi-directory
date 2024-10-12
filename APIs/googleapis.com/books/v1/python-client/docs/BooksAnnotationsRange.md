# BooksAnnotationsRange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_offset** | **str** | The offset from the ending position. | [optional] 
**end_position** | **str** | The ending position for the range. | [optional] 
**start_offset** | **str** | The offset from the starting position. | [optional] 
**start_position** | **str** | The starting position for the range. | [optional] 

## Example

```python
from openapi_client.models.books_annotations_range import BooksAnnotationsRange

# TODO update the JSON string below
json = "{}"
# create an instance of BooksAnnotationsRange from a JSON string
books_annotations_range_instance = BooksAnnotationsRange.from_json(json)
# print the JSON string representation of the object
print(BooksAnnotationsRange.to_json())

# convert the object into a dict
books_annotations_range_dict = books_annotations_range_instance.to_dict()
# create an instance of BooksAnnotationsRange from a dict
books_annotations_range_from_dict = BooksAnnotationsRange.from_dict(books_annotations_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


