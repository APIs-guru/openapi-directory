# ListNotesResponse

Response for listing notes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The next pagination token in the list response. It should be used as &#x60;page_token&#x60; for the following request. An empty value means no more results. | [optional] 
**notes** | [**List[Note]**](Note.md) | The notes requested. | [optional] 

## Example

```python
from openapi_client.models.list_notes_response import ListNotesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListNotesResponse from a JSON string
list_notes_response_instance = ListNotesResponse.from_json(json)
# print the JSON string representation of the object
print(ListNotesResponse.to_json())

# convert the object into a dict
list_notes_response_dict = list_notes_response_instance.to_dict()
# create an instance of ListNotesResponse from a dict
list_notes_response_from_dict = ListNotesResponse.from_dict(list_notes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


