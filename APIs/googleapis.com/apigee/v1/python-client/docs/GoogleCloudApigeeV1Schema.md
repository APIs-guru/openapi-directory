# GoogleCloudApigeeV1Schema

Response for Schema call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | [**List[GoogleCloudApigeeV1SchemaSchemaElement]**](GoogleCloudApigeeV1SchemaSchemaElement.md) | List of schema fields grouped as dimensions. | [optional] 
**meta** | **List[str]** | Additional metadata associated with schema. This is a legacy field and usually consists of an empty array of strings. | [optional] 
**metrics** | [**List[GoogleCloudApigeeV1SchemaSchemaElement]**](GoogleCloudApigeeV1SchemaSchemaElement.md) | List of schema fields grouped as dimensions that can be used with an aggregate function such as &#x60;sum&#x60;, &#x60;avg&#x60;, &#x60;min&#x60;, and &#x60;max&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_schema import GoogleCloudApigeeV1Schema

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Schema from a JSON string
google_cloud_apigee_v1_schema_instance = GoogleCloudApigeeV1Schema.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Schema.to_json())

# convert the object into a dict
google_cloud_apigee_v1_schema_dict = google_cloud_apigee_v1_schema_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Schema from a dict
google_cloud_apigee_v1_schema_from_dict = GoogleCloudApigeeV1Schema.from_dict(google_cloud_apigee_v1_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


