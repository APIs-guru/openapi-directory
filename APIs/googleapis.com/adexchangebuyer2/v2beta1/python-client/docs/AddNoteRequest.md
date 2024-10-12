# AddNoteRequest

Request message for adding a note to a given proposal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**note** | [**Note**](Note.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_note_request import AddNoteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddNoteRequest from a JSON string
add_note_request_instance = AddNoteRequest.from_json(json)
# print the JSON string representation of the object
print(AddNoteRequest.to_json())

# convert the object into a dict
add_note_request_dict = add_note_request_instance.to_dict()
# create an instance of AddNoteRequest from a dict
add_note_request_from_dict = AddNoteRequest.from_dict(add_note_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


