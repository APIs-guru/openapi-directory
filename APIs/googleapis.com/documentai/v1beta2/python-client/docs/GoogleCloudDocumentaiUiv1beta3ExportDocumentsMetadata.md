# GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadata

Metadata of the batch export documents operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_metadata** | [**GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata**](GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata.md) |  | [optional] 
**individual_export_statuses** | [**List[GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataIndividualExportStatus]**](GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataIndividualExportStatus.md) | The list of response details of each document. | [optional] 
**split_export_stats** | [**List[GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStat]**](GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStat.md) | The list of statistics for each dataset split type. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_uiv1beta3_export_documents_metadata import GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadata from a JSON string
google_cloud_documentai_uiv1beta3_export_documents_metadata_instance = GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadata.to_json())

# convert the object into a dict
google_cloud_documentai_uiv1beta3_export_documents_metadata_dict = google_cloud_documentai_uiv1beta3_export_documents_metadata_instance.to_dict()
# create an instance of GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadata from a dict
google_cloud_documentai_uiv1beta3_export_documents_metadata_from_dict = GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadata.from_dict(google_cloud_documentai_uiv1beta3_export_documents_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


