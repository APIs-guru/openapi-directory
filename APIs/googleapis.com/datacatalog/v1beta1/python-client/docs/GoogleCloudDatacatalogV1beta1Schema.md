# GoogleCloudDatacatalogV1beta1Schema

Represents a schema (e.g. BigQuery, GoogleSQL, Avro schema).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[GoogleCloudDatacatalogV1beta1ColumnSchema]**](GoogleCloudDatacatalogV1beta1ColumnSchema.md) | Required. Schema of columns. A maximum of 10,000 columns and sub-columns can be specified. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_schema import GoogleCloudDatacatalogV1beta1Schema

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1Schema from a JSON string
google_cloud_datacatalog_v1beta1_schema_instance = GoogleCloudDatacatalogV1beta1Schema.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1Schema.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_schema_dict = google_cloud_datacatalog_v1beta1_schema_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1Schema from a dict
google_cloud_datacatalog_v1beta1_schema_from_dict = GoogleCloudDatacatalogV1beta1Schema.from_dict(google_cloud_datacatalog_v1beta1_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


