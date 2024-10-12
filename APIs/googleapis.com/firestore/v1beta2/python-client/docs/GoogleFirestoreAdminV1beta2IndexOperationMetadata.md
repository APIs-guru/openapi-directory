# GoogleFirestoreAdminV1beta2IndexOperationMetadata

Metadata for google.longrunning.Operation results from FirestoreAdmin.CreateIndex.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The time this operation completed. Will be unset if operation still in progress. | [optional] 
**index** | **str** | The index resource that this operation is acting on. For example: &#x60;projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}&#x60; | [optional] 
**progress_bytes** | [**GoogleFirestoreAdminV1beta2Progress**](GoogleFirestoreAdminV1beta2Progress.md) |  | [optional] 
**progress_documents** | [**GoogleFirestoreAdminV1beta2Progress**](GoogleFirestoreAdminV1beta2Progress.md) |  | [optional] 
**start_time** | **str** | The time this operation started. | [optional] 
**state** | **str** | The state of the operation. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1beta2_index_operation_metadata import GoogleFirestoreAdminV1beta2IndexOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1beta2IndexOperationMetadata from a JSON string
google_firestore_admin_v1beta2_index_operation_metadata_instance = GoogleFirestoreAdminV1beta2IndexOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1beta2IndexOperationMetadata.to_json())

# convert the object into a dict
google_firestore_admin_v1beta2_index_operation_metadata_dict = google_firestore_admin_v1beta2_index_operation_metadata_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1beta2IndexOperationMetadata from a dict
google_firestore_admin_v1beta2_index_operation_metadata_from_dict = GoogleFirestoreAdminV1beta2IndexOperationMetadata.from_dict(google_firestore_admin_v1beta2_index_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


