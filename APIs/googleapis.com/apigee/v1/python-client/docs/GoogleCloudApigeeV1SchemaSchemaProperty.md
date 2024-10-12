# GoogleCloudApigeeV1SchemaSchemaProperty

Properties for the schema field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Time the field was created in RFC3339 string form. For example: &#x60;2016-02-26T10:23:09.592Z&#x60;. | [optional] 
**custom** | **str** | Flag that specifies whether the field is standard in the dataset or a custom field created by the customer. &#x60;true&#x60; indicates that it is a custom field. | [optional] 
**type** | **str** | Data type of the field. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_schema_schema_property import GoogleCloudApigeeV1SchemaSchemaProperty

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SchemaSchemaProperty from a JSON string
google_cloud_apigee_v1_schema_schema_property_instance = GoogleCloudApigeeV1SchemaSchemaProperty.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SchemaSchemaProperty.to_json())

# convert the object into a dict
google_cloud_apigee_v1_schema_schema_property_dict = google_cloud_apigee_v1_schema_schema_property_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SchemaSchemaProperty from a dict
google_cloud_apigee_v1_schema_schema_property_from_dict = GoogleCloudApigeeV1SchemaSchemaProperty.from_dict(google_cloud_apigee_v1_schema_schema_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


