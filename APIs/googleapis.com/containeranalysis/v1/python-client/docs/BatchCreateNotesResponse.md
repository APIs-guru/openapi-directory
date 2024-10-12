# BatchCreateNotesResponse

Response for creating notes in batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notes** | [**List[Note]**](Note.md) | The notes that were created. | [optional] 

## Example

```python
from openapi_client.models.batch_create_notes_response import BatchCreateNotesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateNotesResponse from a JSON string
batch_create_notes_response_instance = BatchCreateNotesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchCreateNotesResponse.to_json())

# convert the object into a dict
batch_create_notes_response_dict = batch_create_notes_response_instance.to_dict()
# create an instance of BatchCreateNotesResponse from a dict
batch_create_notes_response_from_dict = BatchCreateNotesResponse.from_dict(batch_create_notes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


