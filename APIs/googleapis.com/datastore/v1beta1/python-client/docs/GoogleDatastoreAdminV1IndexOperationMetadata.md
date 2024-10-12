# GoogleDatastoreAdminV1IndexOperationMetadata

Metadata for Index operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common** | [**GoogleDatastoreAdminV1CommonMetadata**](GoogleDatastoreAdminV1CommonMetadata.md) |  | [optional] 
**index_id** | **str** | The index resource ID that this operation is acting on. | [optional] 
**progress_entities** | [**GoogleDatastoreAdminV1Progress**](GoogleDatastoreAdminV1Progress.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_datastore_admin_v1_index_operation_metadata import GoogleDatastoreAdminV1IndexOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDatastoreAdminV1IndexOperationMetadata from a JSON string
google_datastore_admin_v1_index_operation_metadata_instance = GoogleDatastoreAdminV1IndexOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleDatastoreAdminV1IndexOperationMetadata.to_json())

# convert the object into a dict
google_datastore_admin_v1_index_operation_metadata_dict = google_datastore_admin_v1_index_operation_metadata_instance.to_dict()
# create an instance of GoogleDatastoreAdminV1IndexOperationMetadata from a dict
google_datastore_admin_v1_index_operation_metadata_from_dict = GoogleDatastoreAdminV1IndexOperationMetadata.from_dict(google_datastore_admin_v1_index_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


