# GoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentId

Identifies a document uniquely within the scope of a dataset in the user-managed Cloud Storage option.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cw_doc_id** | **str** | Id of the document (indexed) managed by Content Warehouse. | [optional] 
**gcs_uri** | **str** | Required. The Cloud Storage URI where the actual document is stored. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_uiv1beta3_document_id_gcs_managed_document_id import GoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentId

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentId from a JSON string
google_cloud_documentai_uiv1beta3_document_id_gcs_managed_document_id_instance = GoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentId.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentId.to_json())

# convert the object into a dict
google_cloud_documentai_uiv1beta3_document_id_gcs_managed_document_id_dict = google_cloud_documentai_uiv1beta3_document_id_gcs_managed_document_id_instance.to_dict()
# create an instance of GoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentId from a dict
google_cloud_documentai_uiv1beta3_document_id_gcs_managed_document_id_from_dict = GoogleCloudDocumentaiUiv1beta3DocumentIdGCSManagedDocumentId.from_dict(google_cloud_documentai_uiv1beta3_document_id_gcs_managed_document_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


