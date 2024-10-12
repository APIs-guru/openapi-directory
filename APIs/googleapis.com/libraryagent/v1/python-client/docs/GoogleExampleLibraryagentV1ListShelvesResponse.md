# GoogleExampleLibraryagentV1ListShelvesResponse

Response message for LibraryAgent.ListShelves.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve next page of results. Pass this value in the ListShelvesRequest.page_token field in the subsequent call to &#x60;ListShelves&#x60; method to retrieve the next page of results. | [optional] 
**shelves** | [**List[GoogleExampleLibraryagentV1Shelf]**](GoogleExampleLibraryagentV1Shelf.md) | The list of shelves. | [optional] 

## Example

```python
from openapi_client.models.google_example_libraryagent_v1_list_shelves_response import GoogleExampleLibraryagentV1ListShelvesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleExampleLibraryagentV1ListShelvesResponse from a JSON string
google_example_libraryagent_v1_list_shelves_response_instance = GoogleExampleLibraryagentV1ListShelvesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleExampleLibraryagentV1ListShelvesResponse.to_json())

# convert the object into a dict
google_example_libraryagent_v1_list_shelves_response_dict = google_example_libraryagent_v1_list_shelves_response_instance.to_dict()
# create an instance of GoogleExampleLibraryagentV1ListShelvesResponse from a dict
google_example_libraryagent_v1_list_shelves_response_from_dict = GoogleExampleLibraryagentV1ListShelvesResponse.from_dict(google_example_libraryagent_v1_list_shelves_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


