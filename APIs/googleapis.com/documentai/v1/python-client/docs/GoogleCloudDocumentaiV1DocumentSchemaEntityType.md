# GoogleCloudDocumentaiV1DocumentSchemaEntityType

EntityType is the wrapper of a label of the corresponding model with detailed attributes and limitations for entity-based processors. Multiple types can also compose a dependency tree to represent nested types.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_types** | **List[str]** | The entity type that this type is derived from. For now, one and only one should be set. | [optional] 
**display_name** | **str** | User defined name for the type. | [optional] 
**enum_values** | [**GoogleCloudDocumentaiV1DocumentSchemaEntityTypeEnumValues**](GoogleCloudDocumentaiV1DocumentSchemaEntityTypeEnumValues.md) |  | [optional] 
**name** | **str** | Name of the type. It must be unique within the schema file and cannot be a \&quot;Common Type\&quot;. The following naming conventions are used: - Use &#x60;snake_casing&#x60;. - Name matching is case-sensitive. - Maximum 64 characters. - Must start with a letter. - Allowed characters: ASCII letters &#x60;[a-z0-9_-]&#x60;. (For backward compatibility internal infrastructure and tooling can handle any ascii character.) - The &#x60;/&#x60; is sometimes used to denote a property of a type. For example &#x60;line_item/amount&#x60;. This convention is deprecated, but will still be honored for backward compatibility. | [optional] 
**properties** | [**List[GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty]**](GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty.md) | Description the nested structure, or composition of an entity. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_document_schema_entity_type import GoogleCloudDocumentaiV1DocumentSchemaEntityType

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1DocumentSchemaEntityType from a JSON string
google_cloud_documentai_v1_document_schema_entity_type_instance = GoogleCloudDocumentaiV1DocumentSchemaEntityType.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1DocumentSchemaEntityType.to_json())

# convert the object into a dict
google_cloud_documentai_v1_document_schema_entity_type_dict = google_cloud_documentai_v1_document_schema_entity_type_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1DocumentSchemaEntityType from a dict
google_cloud_documentai_v1_document_schema_entity_type_from_dict = GoogleCloudDocumentaiV1DocumentSchemaEntityType.from_dict(google_cloud_documentai_v1_document_schema_entity_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


