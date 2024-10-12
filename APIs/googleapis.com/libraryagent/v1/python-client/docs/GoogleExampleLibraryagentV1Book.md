# GoogleExampleLibraryagentV1Book

A single book in the library.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** | The name of the book author. | [optional] 
**name** | **str** | The resource name of the book. Book names have the form &#x60;shelves/{shelf_id}/books/{book_id}&#x60;. The name is ignored when creating a book. | [optional] 
**read** | **bool** | Value indicating whether the book has been read. | [optional] 
**title** | **str** | The title of the book. | [optional] 

## Example

```python
from openapi_client.models.google_example_libraryagent_v1_book import GoogleExampleLibraryagentV1Book

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleExampleLibraryagentV1Book from a JSON string
google_example_libraryagent_v1_book_instance = GoogleExampleLibraryagentV1Book.from_json(json)
# print the JSON string representation of the object
print(GoogleExampleLibraryagentV1Book.to_json())

# convert the object into a dict
google_example_libraryagent_v1_book_dict = google_example_libraryagent_v1_book_instance.to_dict()
# create an instance of GoogleExampleLibraryagentV1Book from a dict
google_example_libraryagent_v1_book_from_dict = GoogleExampleLibraryagentV1Book.from_dict(google_example_libraryagent_v1_book_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


