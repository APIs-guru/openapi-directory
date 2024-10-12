# GoogleCloudDocumentaiV1beta3DocumentMetadata

Metadata about a document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_type** | **str** | Type of the dataset split to which the document belongs. | [optional] 
**display_name** | **str** | The display name of the document. | [optional] 
**document_id** | [**GoogleCloudDocumentaiV1beta3DocumentId**](GoogleCloudDocumentaiV1beta3DocumentId.md) |  | [optional] 
**labeling_state** | **str** | Labeling state of the document. | [optional] 
**page_count** | **int** | Number of pages in the document. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_document_metadata import GoogleCloudDocumentaiV1beta3DocumentMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DocumentMetadata from a JSON string
google_cloud_documentai_v1beta3_document_metadata_instance = GoogleCloudDocumentaiV1beta3DocumentMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DocumentMetadata.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_document_metadata_dict = google_cloud_documentai_v1beta3_document_metadata_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DocumentMetadata from a dict
google_cloud_documentai_v1beta3_document_metadata_from_dict = GoogleCloudDocumentaiV1beta3DocumentMetadata.from_dict(google_cloud_documentai_v1beta3_document_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


