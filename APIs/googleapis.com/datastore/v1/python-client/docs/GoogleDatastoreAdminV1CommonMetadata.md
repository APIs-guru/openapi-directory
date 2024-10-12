# GoogleDatastoreAdminV1CommonMetadata

Metadata common to all Datastore Admin operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The time the operation ended, either successfully or otherwise. | [optional] 
**labels** | **Dict[str, str]** | The client-assigned labels which were provided when the operation was created. May also include additional labels. | [optional] 
**operation_type** | **str** | The type of the operation. Can be used as a filter in ListOperationsRequest. | [optional] 
**start_time** | **str** | The time that work began on the operation. | [optional] 
**state** | **str** | The current state of the Operation. | [optional] 

## Example

```python
from openapi_client.models.google_datastore_admin_v1_common_metadata import GoogleDatastoreAdminV1CommonMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDatastoreAdminV1CommonMetadata from a JSON string
google_datastore_admin_v1_common_metadata_instance = GoogleDatastoreAdminV1CommonMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleDatastoreAdminV1CommonMetadata.to_json())

# convert the object into a dict
google_datastore_admin_v1_common_metadata_dict = google_datastore_admin_v1_common_metadata_instance.to_dict()
# create an instance of GoogleDatastoreAdminV1CommonMetadata from a dict
google_datastore_admin_v1_common_metadata_from_dict = GoogleDatastoreAdminV1CommonMetadata.from_dict(google_datastore_admin_v1_common_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


