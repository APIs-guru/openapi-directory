# GoogleCloudDocumentaiV1DocumentSchema

The schema defines the output of the processed document by a processor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the schema. | [optional] 
**display_name** | **str** | Display name to show to users. | [optional] 
**entity_types** | [**List[GoogleCloudDocumentaiV1DocumentSchemaEntityType]**](GoogleCloudDocumentaiV1DocumentSchemaEntityType.md) | Entity types of the schema. | [optional] 
**metadata** | [**GoogleCloudDocumentaiV1DocumentSchemaMetadata**](GoogleCloudDocumentaiV1DocumentSchemaMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_document_schema import GoogleCloudDocumentaiV1DocumentSchema

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1DocumentSchema from a JSON string
google_cloud_documentai_v1_document_schema_instance = GoogleCloudDocumentaiV1DocumentSchema.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1DocumentSchema.to_json())

# convert the object into a dict
google_cloud_documentai_v1_document_schema_dict = google_cloud_documentai_v1_document_schema_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1DocumentSchema from a dict
google_cloud_documentai_v1_document_schema_from_dict = GoogleCloudDocumentaiV1DocumentSchema.from_dict(google_cloud_documentai_v1_document_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


