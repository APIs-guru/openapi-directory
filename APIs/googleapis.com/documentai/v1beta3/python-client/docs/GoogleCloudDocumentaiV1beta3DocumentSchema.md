# GoogleCloudDocumentaiV1beta3DocumentSchema

The schema defines the output of the processed document by a processor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the schema. | [optional] 
**display_name** | **str** | Display name to show to users. | [optional] 
**entity_types** | [**List[GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType]**](GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType.md) | Entity types of the schema. | [optional] 
**metadata** | [**GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata**](GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_document_schema import GoogleCloudDocumentaiV1beta3DocumentSchema

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DocumentSchema from a JSON string
google_cloud_documentai_v1beta3_document_schema_instance = GoogleCloudDocumentaiV1beta3DocumentSchema.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DocumentSchema.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_document_schema_dict = google_cloud_documentai_v1beta3_document_schema_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DocumentSchema from a dict
google_cloud_documentai_v1beta3_document_schema_from_dict = GoogleCloudDocumentaiV1beta3DocumentSchema.from_dict(google_cloud_documentai_v1beta3_document_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


