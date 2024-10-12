# ListNoteOccurrencesResponse

Response including listed occurrences for a note.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to receive the next page of notes. | [optional] 
**occurrences** | [**List[Occurrence]**](Occurrence.md) | The occurrences attached to the specified note. | [optional] 

## Example

```python
from openapi_client.models.list_note_occurrences_response import ListNoteOccurrencesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListNoteOccurrencesResponse from a JSON string
list_note_occurrences_response_instance = ListNoteOccurrencesResponse.from_json(json)
# print the JSON string representation of the object
print(ListNoteOccurrencesResponse.to_json())

# convert the object into a dict
list_note_occurrences_response_dict = list_note_occurrences_response_instance.to_dict()
# create an instance of ListNoteOccurrencesResponse from a dict
list_note_occurrences_response_from_dict = ListNoteOccurrencesResponse.from_dict(list_note_occurrences_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


