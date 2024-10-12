# GoogleExampleLibraryagentV1ListBooksResponse

Response message for LibraryAgent.ListBooks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**books** | [**List[GoogleExampleLibraryagentV1Book]**](GoogleExampleLibraryagentV1Book.md) | The list of books. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Pass this value in the ListBooksRequest.page_token field in the subsequent call to &#x60;ListBooks&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.google_example_libraryagent_v1_list_books_response import GoogleExampleLibraryagentV1ListBooksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleExampleLibraryagentV1ListBooksResponse from a JSON string
google_example_libraryagent_v1_list_books_response_instance = GoogleExampleLibraryagentV1ListBooksResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleExampleLibraryagentV1ListBooksResponse.to_json())

# convert the object into a dict
google_example_libraryagent_v1_list_books_response_dict = google_example_libraryagent_v1_list_books_response_instance.to_dict()
# create an instance of GoogleExampleLibraryagentV1ListBooksResponse from a dict
google_example_libraryagent_v1_list_books_response_from_dict = GoogleExampleLibraryagentV1ListBooksResponse.from_dict(google_example_libraryagent_v1_list_books_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


