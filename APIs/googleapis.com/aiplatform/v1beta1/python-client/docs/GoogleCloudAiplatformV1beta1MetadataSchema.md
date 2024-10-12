# GoogleCloudAiplatformV1beta1MetadataSchema

Instance of a general MetadataSchema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this MetadataSchema was created. | [optional] [readonly] 
**description** | **str** | Description of the Metadata Schema | [optional] 
**name** | **str** | Output only. The resource name of the MetadataSchema. | [optional] [readonly] 
**var_schema** | **str** | Required. The raw YAML string representation of the MetadataSchema. The combination of [MetadataSchema.version] and the schema name given by &#x60;title&#x60; in [MetadataSchema.schema] must be unique within a MetadataStore. The schema is defined as an OpenAPI 3.0.2 [MetadataSchema Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#schemaObject) | [optional] 
**schema_type** | **str** | The type of the MetadataSchema. This is a property that identifies which metadata types will use the MetadataSchema. | [optional] 
**schema_version** | **str** | The version of the MetadataSchema. The version&#39;s format must match the following regular expression: &#x60;^[0-9]+.+.+$&#x60;, which would allow to order/compare different versions. Example: 1.0.0, 1.0.1, etc. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_metadata_schema import GoogleCloudAiplatformV1beta1MetadataSchema

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1MetadataSchema from a JSON string
google_cloud_aiplatform_v1beta1_metadata_schema_instance = GoogleCloudAiplatformV1beta1MetadataSchema.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1MetadataSchema.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_metadata_schema_dict = google_cloud_aiplatform_v1beta1_metadata_schema_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1MetadataSchema from a dict
google_cloud_aiplatform_v1beta1_metadata_schema_from_dict = GoogleCloudAiplatformV1beta1MetadataSchema.from_dict(google_cloud_aiplatform_v1beta1_metadata_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


