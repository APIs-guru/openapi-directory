# GoogleFirestoreAdminV1beta2FieldOperationMetadata

Metadata for google.longrunning.Operation results from FirestoreAdmin.UpdateField.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_progress** | [**GoogleFirestoreAdminV1beta2Progress**](GoogleFirestoreAdminV1beta2Progress.md) |  | [optional] 
**document_progress** | [**GoogleFirestoreAdminV1beta2Progress**](GoogleFirestoreAdminV1beta2Progress.md) |  | [optional] 
**end_time** | **str** | The time this operation completed. Will be unset if operation still in progress. | [optional] 
**var_field** | **str** | The field resource that this operation is acting on. For example: &#x60;projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}&#x60; | [optional] 
**index_config_deltas** | [**List[GoogleFirestoreAdminV1beta2IndexConfigDelta]**](GoogleFirestoreAdminV1beta2IndexConfigDelta.md) | A list of IndexConfigDelta, which describe the intent of this operation. | [optional] 
**start_time** | **str** | The time this operation started. | [optional] 
**state** | **str** | The state of the operation. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1beta2_field_operation_metadata import GoogleFirestoreAdminV1beta2FieldOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1beta2FieldOperationMetadata from a JSON string
google_firestore_admin_v1beta2_field_operation_metadata_instance = GoogleFirestoreAdminV1beta2FieldOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1beta2FieldOperationMetadata.to_json())

# convert the object into a dict
google_firestore_admin_v1beta2_field_operation_metadata_dict = google_firestore_admin_v1beta2_field_operation_metadata_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1beta2FieldOperationMetadata from a dict
google_firestore_admin_v1beta2_field_operation_metadata_from_dict = GoogleFirestoreAdminV1beta2FieldOperationMetadata.from_dict(google_firestore_admin_v1beta2_field_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


