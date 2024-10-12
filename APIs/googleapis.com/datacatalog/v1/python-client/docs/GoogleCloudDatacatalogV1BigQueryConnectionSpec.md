# GoogleCloudDatacatalogV1BigQueryConnectionSpec

Specification for the BigQuery connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_sql** | [**GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec**](GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec.md) |  | [optional] 
**connection_type** | **str** | The type of the BigQuery connection. | [optional] 
**has_credential** | **bool** | True if there are credentials attached to the BigQuery connection; false otherwise. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_big_query_connection_spec import GoogleCloudDatacatalogV1BigQueryConnectionSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1BigQueryConnectionSpec from a JSON string
google_cloud_datacatalog_v1_big_query_connection_spec_instance = GoogleCloudDatacatalogV1BigQueryConnectionSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1BigQueryConnectionSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_big_query_connection_spec_dict = google_cloud_datacatalog_v1_big_query_connection_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1BigQueryConnectionSpec from a dict
google_cloud_datacatalog_v1_big_query_connection_spec_from_dict = GoogleCloudDatacatalogV1BigQueryConnectionSpec.from_dict(google_cloud_datacatalog_v1_big_query_connection_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


