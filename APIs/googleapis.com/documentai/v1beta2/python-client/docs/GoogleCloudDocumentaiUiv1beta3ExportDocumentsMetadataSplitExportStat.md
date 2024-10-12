# GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStat

The statistic representing a dataset split type for this export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**split_type** | **str** | The dataset split type. | [optional] 
**total_document_count** | **int** | Total number of documents with the given dataset split type to be exported. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_uiv1beta3_export_documents_metadata_split_export_stat import GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStat

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStat from a JSON string
google_cloud_documentai_uiv1beta3_export_documents_metadata_split_export_stat_instance = GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStat.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStat.to_json())

# convert the object into a dict
google_cloud_documentai_uiv1beta3_export_documents_metadata_split_export_stat_dict = google_cloud_documentai_uiv1beta3_export_documents_metadata_split_export_stat_instance.to_dict()
# create an instance of GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStat from a dict
google_cloud_documentai_uiv1beta3_export_documents_metadata_split_export_stat_from_dict = GoogleCloudDocumentaiUiv1beta3ExportDocumentsMetadataSplitExportStat.from_dict(google_cloud_documentai_uiv1beta3_export_documents_metadata_split_export_stat_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


