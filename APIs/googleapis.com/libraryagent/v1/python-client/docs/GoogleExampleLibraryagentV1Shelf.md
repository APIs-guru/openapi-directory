# GoogleExampleLibraryagentV1Shelf

A Shelf contains a collection of books with a theme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. The resource name of the shelf. Shelf names have the form &#x60;shelves/{shelf_id}&#x60;. The name is ignored when creating a shelf. | [optional] 
**theme** | **str** | The theme of the shelf | [optional] 

## Example

```python
from openapi_client.models.google_example_libraryagent_v1_shelf import GoogleExampleLibraryagentV1Shelf

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleExampleLibraryagentV1Shelf from a JSON string
google_example_libraryagent_v1_shelf_instance = GoogleExampleLibraryagentV1Shelf.from_json(json)
# print the JSON string representation of the object
print(GoogleExampleLibraryagentV1Shelf.to_json())

# convert the object into a dict
google_example_libraryagent_v1_shelf_dict = google_example_libraryagent_v1_shelf_instance.to_dict()
# create an instance of GoogleExampleLibraryagentV1Shelf from a dict
google_example_libraryagent_v1_shelf_from_dict = GoogleExampleLibraryagentV1Shelf.from_dict(google_example_libraryagent_v1_shelf_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


