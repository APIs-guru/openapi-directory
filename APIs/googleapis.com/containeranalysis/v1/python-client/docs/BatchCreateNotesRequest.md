# BatchCreateNotesRequest

Request to create notes in batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notes** | [**Dict[str, Note]**](Note.md) | Required. The notes to create. Max allowed length is 1000. | [optional] 

## Example

```python
from openapi_client.models.batch_create_notes_request import BatchCreateNotesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateNotesRequest from a JSON string
batch_create_notes_request_instance = BatchCreateNotesRequest.from_json(json)
# print the JSON string representation of the object
print(BatchCreateNotesRequest.to_json())

# convert the object into a dict
batch_create_notes_request_dict = batch_create_notes_request_instance.to_dict()
# create an instance of BatchCreateNotesRequest from a dict
batch_create_notes_request_from_dict = BatchCreateNotesRequest.from_dict(batch_create_notes_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


