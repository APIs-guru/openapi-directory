# GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata

Metadata for global schema behavior.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_allow_multiple_labels** | **bool** | If true, on a given page, there can be multiple &#x60;document&#x60; annotations covering it. | [optional] 
**document_splitter** | **bool** | If true, a &#x60;document&#x60; entity type can be applied to subdocument (splitting). Otherwise, it can only be applied to the entire document (classification). | [optional] 
**prefixed_naming_on_properties** | **bool** | If set, all the nested entities must be prefixed with the parents. | [optional] 
**skip_naming_validation** | **bool** | If set, we will skip the naming format validation in the schema. So the string values in &#x60;DocumentSchema.EntityType.name&#x60; and &#x60;DocumentSchema.EntityType.Property.name&#x60; will not be checked. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_document_schema_metadata import GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata from a JSON string
google_cloud_documentai_v1beta3_document_schema_metadata_instance = GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_document_schema_metadata_dict = google_cloud_documentai_v1beta3_document_schema_metadata_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata from a dict
google_cloud_documentai_v1beta3_document_schema_metadata_from_dict = GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata.from_dict(google_cloud_documentai_v1beta3_document_schema_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


