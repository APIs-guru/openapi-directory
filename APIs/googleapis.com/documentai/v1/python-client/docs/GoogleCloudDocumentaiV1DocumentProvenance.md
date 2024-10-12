# GoogleCloudDocumentaiV1DocumentProvenance

Structure to identify provenance relationships between annotations in different revisions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The Id of this operation. Needs to be unique within the scope of the revision. | [optional] 
**parents** | [**List[GoogleCloudDocumentaiV1DocumentProvenanceParent]**](GoogleCloudDocumentaiV1DocumentProvenanceParent.md) | References to the original elements that are replaced. | [optional] 
**revision** | **int** | The index of the revision that produced this element. | [optional] 
**type** | **str** | The type of provenance operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_document_provenance import GoogleCloudDocumentaiV1DocumentProvenance

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1DocumentProvenance from a JSON string
google_cloud_documentai_v1_document_provenance_instance = GoogleCloudDocumentaiV1DocumentProvenance.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1DocumentProvenance.to_json())

# convert the object into a dict
google_cloud_documentai_v1_document_provenance_dict = google_cloud_documentai_v1_document_provenance_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1DocumentProvenance from a dict
google_cloud_documentai_v1_document_provenance_from_dict = GoogleCloudDocumentaiV1DocumentProvenance.from_dict(google_cloud_documentai_v1_document_provenance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


