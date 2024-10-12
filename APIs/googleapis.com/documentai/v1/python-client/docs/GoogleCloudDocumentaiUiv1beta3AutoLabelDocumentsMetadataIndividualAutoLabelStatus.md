# GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatus

The status of individual documents in the auto-labeling process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | [**GoogleCloudDocumentaiUiv1beta3DocumentId**](GoogleCloudDocumentaiUiv1beta3DocumentId.md) |  | [optional] 
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_uiv1beta3_auto_label_documents_metadata_individual_auto_label_status import GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatus from a JSON string
google_cloud_documentai_uiv1beta3_auto_label_documents_metadata_individual_auto_label_status_instance = GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatus.to_json())

# convert the object into a dict
google_cloud_documentai_uiv1beta3_auto_label_documents_metadata_individual_auto_label_status_dict = google_cloud_documentai_uiv1beta3_auto_label_documents_metadata_individual_auto_label_status_instance.to_dict()
# create an instance of GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatus from a dict
google_cloud_documentai_uiv1beta3_auto_label_documents_metadata_individual_auto_label_status_from_dict = GoogleCloudDocumentaiUiv1beta3AutoLabelDocumentsMetadataIndividualAutoLabelStatus.from_dict(google_cloud_documentai_uiv1beta3_auto_label_documents_metadata_individual_auto_label_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


