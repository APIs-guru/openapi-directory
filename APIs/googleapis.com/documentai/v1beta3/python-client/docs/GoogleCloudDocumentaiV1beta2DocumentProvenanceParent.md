# GoogleCloudDocumentaiV1beta2DocumentProvenanceParent

The parent element the current element is based on. Used for referencing/aligning, removal and replacement operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The id of the parent provenance. | [optional] 
**index** | **int** | The index of the parent item in the corresponding item list (eg. list of entities, properties within entities, etc.) in the parent revision. | [optional] 
**revision** | **int** | The index of the index into current revision&#39;s parent_ids list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_document_provenance_parent import GoogleCloudDocumentaiV1beta2DocumentProvenanceParent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2DocumentProvenanceParent from a JSON string
google_cloud_documentai_v1beta2_document_provenance_parent_instance = GoogleCloudDocumentaiV1beta2DocumentProvenanceParent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2DocumentProvenanceParent.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_document_provenance_parent_dict = google_cloud_documentai_v1beta2_document_provenance_parent_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2DocumentProvenanceParent from a dict
google_cloud_documentai_v1beta2_document_provenance_parent_from_dict = GoogleCloudDocumentaiV1beta2DocumentProvenanceParent.from_dict(google_cloud_documentai_v1beta2_document_provenance_parent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


