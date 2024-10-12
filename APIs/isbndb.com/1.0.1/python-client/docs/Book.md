# Book

Describes a book in the book's database

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authors** | **List[str]** |  | [optional] 
**date_published** | **datetime** |  | [optional] 
**dewey_decimal** | **str** |  | [optional] 
**dimensions** | **str** |  | [optional] 
**edition** | **str** |  | [optional] 
**excerpt** | **str** |  | [optional] 
**format** | **str** |  | [optional] 
**isbn** | **str** |  | [optional] 
**isbn13** | **str** |  | [optional] 
**language** | **str** |  | [optional] 
**overview** | **str** |  | [optional] 
**pages** | **int** |  | [optional] 
**publisher** | **str** |  | [optional] 
**reviews** | **List[str]** |  | [optional] 
**subjects** | **List[str]** |  | [optional] 
**synopsys** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**title_long** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.book import Book

# TODO update the JSON string below
json = "{}"
# create an instance of Book from a JSON string
book_instance = Book.from_json(json)
# print the JSON string representation of the object
print(Book.to_json())

# convert the object into a dict
book_dict = book_instance.to_dict()
# create an instance of Book from a dict
book_from_dict = Book.from_dict(book_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


