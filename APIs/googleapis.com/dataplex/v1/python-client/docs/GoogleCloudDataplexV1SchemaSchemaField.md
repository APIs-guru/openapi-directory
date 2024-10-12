# GoogleCloudDataplexV1SchemaSchemaField

Represents a column field within a table schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. User friendly field description. Must be less than or equal to 1024 characters. | [optional] 
**fields** | [**List[GoogleCloudDataplexV1SchemaSchemaField]**](GoogleCloudDataplexV1SchemaSchemaField.md) | Optional. Any nested field for complex types. | [optional] 
**mode** | **str** | Required. Additional field semantics. | [optional] 
**name** | **str** | Required. The name of the field. Must contain only letters, numbers and underscores, with a maximum length of 767 characters, and must begin with a letter or underscore. | [optional] 
**type** | **str** | Required. The type of field. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_schema_schema_field import GoogleCloudDataplexV1SchemaSchemaField

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1SchemaSchemaField from a JSON string
google_cloud_dataplex_v1_schema_schema_field_instance = GoogleCloudDataplexV1SchemaSchemaField.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1SchemaSchemaField.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_schema_schema_field_dict = google_cloud_dataplex_v1_schema_schema_field_instance.to_dict()
# create an instance of GoogleCloudDataplexV1SchemaSchemaField from a dict
google_cloud_dataplex_v1_schema_schema_field_from_dict = GoogleCloudDataplexV1SchemaSchemaField.from_dict(google_cloud_dataplex_v1_schema_schema_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


