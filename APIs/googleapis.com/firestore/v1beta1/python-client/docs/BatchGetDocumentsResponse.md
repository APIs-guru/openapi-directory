# BatchGetDocumentsResponse

The streamed response for Firestore.BatchGetDocuments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**found** | [**Document**](Document.md) |  | [optional] 
**missing** | **str** | A document name that was requested but does not exist. In the format: &#x60;projects/{project_id}/databases/{database_id}/documents/{document_path}&#x60;. | [optional] 
**read_time** | **str** | The time at which the document was read. This may be monotically increasing, in this case the previous documents in the result stream are guaranteed not to have changed between their read_time and this one. | [optional] 
**transaction** | **bytearray** | The transaction that was started as part of this request. Will only be set in the first response, and only if BatchGetDocumentsRequest.new_transaction was set in the request. | [optional] 

## Example

```python
from openapi_client.models.batch_get_documents_response import BatchGetDocumentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetDocumentsResponse from a JSON string
batch_get_documents_response_instance = BatchGetDocumentsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchGetDocumentsResponse.to_json())

# convert the object into a dict
batch_get_documents_response_dict = batch_get_documents_response_instance.to_dict()
# create an instance of BatchGetDocumentsResponse from a dict
batch_get_documents_response_from_dict = BatchGetDocumentsResponse.from_dict(batch_get_documents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


