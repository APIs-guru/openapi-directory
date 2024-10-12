# GoogleCloudDocumentaiV1DocumentEntityRelation

Relationship between Entities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | Object entity id. | [optional] 
**relation** | **str** | Relationship description. | [optional] 
**subject_id** | **str** | Subject entity id. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_document_entity_relation import GoogleCloudDocumentaiV1DocumentEntityRelation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1DocumentEntityRelation from a JSON string
google_cloud_documentai_v1_document_entity_relation_instance = GoogleCloudDocumentaiV1DocumentEntityRelation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1DocumentEntityRelation.to_json())

# convert the object into a dict
google_cloud_documentai_v1_document_entity_relation_dict = google_cloud_documentai_v1_document_entity_relation_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1DocumentEntityRelation from a dict
google_cloud_documentai_v1_document_entity_relation_from_dict = GoogleCloudDocumentaiV1DocumentEntityRelation.from_dict(google_cloud_documentai_v1_document_entity_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


