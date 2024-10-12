# GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty

Defines properties that can be part of the entity type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | User defined name for the property. | [optional] 
**name** | **str** | The name of the property. Follows the same guidelines as the EntityType name. | [optional] 
**occurrence_type** | **str** | Occurrence type limits the number of instances an entity type appears in the document. | [optional] 
**property_metadata** | [**GoogleCloudDocumentaiV1beta3PropertyMetadata**](GoogleCloudDocumentaiV1beta3PropertyMetadata.md) |  | [optional] 
**value_type** | **str** | A reference to the value type of the property. This type is subject to the same conventions as the &#x60;Entity.base_types&#x60; field. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_document_schema_entity_type_property import GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty from a JSON string
google_cloud_documentai_v1beta3_document_schema_entity_type_property_instance = GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_document_schema_entity_type_property_dict = google_cloud_documentai_v1beta3_document_schema_entity_type_property_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty from a dict
google_cloud_documentai_v1beta3_document_schema_entity_type_property_from_dict = GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeProperty.from_dict(google_cloud_documentai_v1beta3_document_schema_entity_type_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


