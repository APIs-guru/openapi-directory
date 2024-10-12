# GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadata

The metadata proto of `ResyncDataset` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_metadata** | [**GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata**](GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata.md) |  | [optional] 
**dataset_resync_statuses** | [**List[GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatus]**](GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatus.md) | The list of dataset resync statuses. Not checked when ResyncDatasetRequest.dataset_documents is specified. | [optional] 
**individual_document_resync_statuses** | [**List[GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatus]**](GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataIndividualDocumentResyncStatus.md) | The list of document resync statuses. The same document could have multiple &#x60;individual_document_resync_statuses&#x60; if it has multiple inconsistencies. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_uiv1beta3_resync_dataset_metadata import GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadata from a JSON string
google_cloud_documentai_uiv1beta3_resync_dataset_metadata_instance = GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadata.to_json())

# convert the object into a dict
google_cloud_documentai_uiv1beta3_resync_dataset_metadata_dict = google_cloud_documentai_uiv1beta3_resync_dataset_metadata_instance.to_dict()
# create an instance of GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadata from a dict
google_cloud_documentai_uiv1beta3_resync_dataset_metadata_from_dict = GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadata.from_dict(google_cloud_documentai_uiv1beta3_resync_dataset_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


