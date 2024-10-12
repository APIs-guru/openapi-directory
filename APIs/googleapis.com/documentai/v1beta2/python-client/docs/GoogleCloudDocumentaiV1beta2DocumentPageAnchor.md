# GoogleCloudDocumentaiV1beta2DocumentPageAnchor

Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_refs** | [**List[GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef]**](GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef.md) | One or more references to visual page elements | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_document_page_anchor import GoogleCloudDocumentaiV1beta2DocumentPageAnchor

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2DocumentPageAnchor from a JSON string
google_cloud_documentai_v1beta2_document_page_anchor_instance = GoogleCloudDocumentaiV1beta2DocumentPageAnchor.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2DocumentPageAnchor.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_document_page_anchor_dict = google_cloud_documentai_v1beta2_document_page_anchor_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2DocumentPageAnchor from a dict
google_cloud_documentai_v1beta2_document_page_anchor_from_dict = GoogleCloudDocumentaiV1beta2DocumentPageAnchor.from_dict(google_cloud_documentai_v1beta2_document_page_anchor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


