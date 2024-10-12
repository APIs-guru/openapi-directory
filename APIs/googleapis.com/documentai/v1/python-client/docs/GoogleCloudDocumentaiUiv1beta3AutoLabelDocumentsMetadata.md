# GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadata

Metadata of the auto-labeling documents operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_metadata** | [**GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata**](GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata.md) |  | [optional] 
**individual_auto_label_statuses** | [**List[GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatus]**](GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatus.md) | The list of individual auto-labeling statuses of the dataset documents. | [optional] 
**total_document_count** | **int** | Total number of the auto-labeling documents. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_uiv1beta3_auto_label_documents_metadata import GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadata from a JSON string
google_cloud_documentai_uiv1beta3_auto_label_documents_metadata_instance = GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadata.to_json())

# convert the object into a dict
google_cloud_documentai_uiv1beta3_auto_label_documents_metadata_dict = google_cloud_documentai_uiv1beta3_auto_label_documents_metadata_instance.to_dict()
# create an instance of GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadata from a dict
google_cloud_documentai_uiv1beta3_auto_label_documents_metadata_from_dict = GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadata.from_dict(google_cloud_documentai_uiv1beta3_auto_label_documents_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


