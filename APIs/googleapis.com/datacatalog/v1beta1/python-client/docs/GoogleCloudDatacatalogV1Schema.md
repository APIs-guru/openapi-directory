# GoogleCloudDatacatalogV1Schema

Represents a schema, for example, a BigQuery, GoogleSQL, or Avro schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[GoogleCloudDatacatalogV1ColumnSchema]**](GoogleCloudDatacatalogV1ColumnSchema.md) | The unified GoogleSQL-like schema of columns. The overall maximum number of columns and nested columns is 10,000. The maximum nested depth is 15 levels. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_schema import GoogleCloudDatacatalogV1Schema

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1Schema from a JSON string
google_cloud_datacatalog_v1_schema_instance = GoogleCloudDatacatalogV1Schema.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1Schema.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_schema_dict = google_cloud_datacatalog_v1_schema_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1Schema from a dict
google_cloud_datacatalog_v1_schema_from_dict = GoogleCloudDatacatalogV1Schema.from_dict(google_cloud_datacatalog_v1_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


