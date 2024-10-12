# GoogleCloudApigeeV1SchemaSchemaElement

Message type for the schema element

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the field. | [optional] 
**properties** | [**GoogleCloudApigeeV1SchemaSchemaProperty**](GoogleCloudApigeeV1SchemaSchemaProperty.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_schema_schema_element import GoogleCloudApigeeV1SchemaSchemaElement

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SchemaSchemaElement from a JSON string
google_cloud_apigee_v1_schema_schema_element_instance = GoogleCloudApigeeV1SchemaSchemaElement.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SchemaSchemaElement.to_json())

# convert the object into a dict
google_cloud_apigee_v1_schema_schema_element_dict = google_cloud_apigee_v1_schema_schema_element_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SchemaSchemaElement from a dict
google_cloud_apigee_v1_schema_schema_element_from_dict = GoogleCloudApigeeV1SchemaSchemaElement.from_dict(google_cloud_apigee_v1_schema_schema_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


