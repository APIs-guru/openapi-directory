# BatchGetDocumentsRequest

The request for Firestore.BatchGetDocuments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | **List[str]** | The names of the documents to retrieve. In the format: &#x60;projects/{project_id}/databases/{database_id}/documents/{document_path}&#x60;. The request will fail if any of the document is not a child resource of the given &#x60;database&#x60;. Duplicate names will be elided. | [optional] 
**mask** | [**DocumentMask**](DocumentMask.md) |  | [optional] 
**new_transaction** | [**TransactionOptions**](TransactionOptions.md) |  | [optional] 
**read_time** | **str** | Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. | [optional] 
**transaction** | **bytearray** | Reads documents in a transaction. | [optional] 

## Example

```python
from openapi_client.models.batch_get_documents_request import BatchGetDocumentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetDocumentsRequest from a JSON string
batch_get_documents_request_instance = BatchGetDocumentsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchGetDocumentsRequest.to_json())

# convert the object into a dict
batch_get_documents_request_dict = batch_get_documents_request_instance.to_dict()
# create an instance of BatchGetDocumentsRequest from a dict
batch_get_documents_request_from_dict = BatchGetDocumentsRequest.from_dict(batch_get_documents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


