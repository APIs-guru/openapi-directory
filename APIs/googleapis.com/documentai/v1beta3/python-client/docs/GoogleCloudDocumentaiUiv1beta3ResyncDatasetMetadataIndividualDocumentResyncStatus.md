# GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatus

Resync status for each document per inconsistency type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | [**GoogleCloudDocumentaiUiv1beta3DocumentId**](GoogleCloudDocumentaiUiv1beta3DocumentId.md) |  | [optional] 
**document_inconsistency_type** | **str** | The type of document inconsistency. | [optional] 
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_uiv1beta3_resync_dataset_metadata_individual_document_resync_status import GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatus from a JSON string
google_cloud_documentai_uiv1beta3_resync_dataset_metadata_individual_document_resync_status_instance = GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatus.to_json())

# convert the object into a dict
google_cloud_documentai_uiv1beta3_resync_dataset_metadata_individual_document_resync_status_dict = google_cloud_documentai_uiv1beta3_resync_dataset_metadata_individual_document_resync_status_instance.to_dict()
# create an instance of GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatus from a dict
google_cloud_documentai_uiv1beta3_resync_dataset_metadata_individual_document_resync_status_from_dict = GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatus.from_dict(google_cloud_documentai_uiv1beta3_resync_dataset_metadata_individual_document_resync_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


