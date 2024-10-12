# GoogleCloudDocumentaiV1beta2DocumentEntity

An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | Optional. Confidence of detected Schema entity. Range &#x60;[0, 1]&#x60;. | [optional] 
**id** | **str** | Optional. Canonical id. This will be a unique value in the entity list for this document. | [optional] 
**mention_id** | **str** | Optional. Deprecated. Use &#x60;id&#x60; field instead. | [optional] 
**mention_text** | **str** | Optional. Text value of the entity e.g. &#x60;1600 Amphitheatre Pkwy&#x60;. | [optional] 
**normalized_value** | [**GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue**](GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue.md) |  | [optional] 
**page_anchor** | [**GoogleCloudDocumentaiV1beta2DocumentPageAnchor**](GoogleCloudDocumentaiV1beta2DocumentPageAnchor.md) |  | [optional] 
**properties** | [**List[GoogleCloudDocumentaiV1beta2DocumentEntity]**](GoogleCloudDocumentaiV1beta2DocumentEntity.md) | Optional. Entities can be nested to form a hierarchical data structure representing the content in the document. | [optional] 
**provenance** | [**GoogleCloudDocumentaiV1beta2DocumentProvenance**](GoogleCloudDocumentaiV1beta2DocumentProvenance.md) |  | [optional] 
**redacted** | **bool** | Optional. Whether the entity will be redacted for de-identification purposes. | [optional] 
**text_anchor** | [**GoogleCloudDocumentaiV1beta2DocumentTextAnchor**](GoogleCloudDocumentaiV1beta2DocumentTextAnchor.md) |  | [optional] 
**type** | **str** | Required. Entity type from a schema e.g. &#x60;Address&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_document_entity import GoogleCloudDocumentaiV1beta2DocumentEntity

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2DocumentEntity from a JSON string
google_cloud_documentai_v1beta2_document_entity_instance = GoogleCloudDocumentaiV1beta2DocumentEntity.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2DocumentEntity.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_document_entity_dict = google_cloud_documentai_v1beta2_document_entity_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2DocumentEntity from a dict
google_cloud_documentai_v1beta2_document_entity_from_dict = GoogleCloudDocumentaiV1beta2DocumentEntity.from_dict(google_cloud_documentai_v1beta2_document_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


