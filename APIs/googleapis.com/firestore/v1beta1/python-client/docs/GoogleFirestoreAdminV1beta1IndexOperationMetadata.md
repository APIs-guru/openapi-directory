# GoogleFirestoreAdminV1beta1IndexOperationMetadata

Metadata for index operations. This metadata populates the metadata field of google.longrunning.Operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancelled** | **bool** | True if the [google.longrunning.Operation] was cancelled. If the cancellation is in progress, cancelled will be true but google.longrunning.Operation.done will be false. | [optional] 
**document_progress** | [**GoogleFirestoreAdminV1beta1Progress**](GoogleFirestoreAdminV1beta1Progress.md) |  | [optional] 
**end_time** | **str** | The time the operation ended, either successfully or otherwise. Unset if the operation is still active. | [optional] 
**index** | **str** | The index resource that this operation is acting on. For example: &#x60;projects/{project_id}/databases/{database_id}/indexes/{index_id}&#x60; | [optional] 
**operation_type** | **str** | The type of index operation. | [optional] 
**start_time** | **str** | The time that work began on the operation. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1beta1_index_operation_metadata import GoogleFirestoreAdminV1beta1IndexOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1beta1IndexOperationMetadata from a JSON string
google_firestore_admin_v1beta1_index_operation_metadata_instance = GoogleFirestoreAdminV1beta1IndexOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1beta1IndexOperationMetadata.to_json())

# convert the object into a dict
google_firestore_admin_v1beta1_index_operation_metadata_dict = google_firestore_admin_v1beta1_index_operation_metadata_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1beta1IndexOperationMetadata from a dict
google_firestore_admin_v1beta1_index_operation_metadata_from_dict = GoogleFirestoreAdminV1beta1IndexOperationMetadata.from_dict(google_firestore_admin_v1beta1_index_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


