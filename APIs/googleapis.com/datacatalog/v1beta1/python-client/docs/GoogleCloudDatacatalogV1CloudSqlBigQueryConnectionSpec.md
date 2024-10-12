# GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec

Specification for the BigQuery connection to a Cloud SQL instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database** | **str** | Database name. | [optional] 
**instance_id** | **str** | Cloud SQL instance ID in the format of &#x60;project:location:instance&#x60;. | [optional] 
**type** | **str** | Type of the Cloud SQL database. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_cloud_sql_big_query_connection_spec import GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec from a JSON string
google_cloud_datacatalog_v1_cloud_sql_big_query_connection_spec_instance = GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_cloud_sql_big_query_connection_spec_dict = google_cloud_datacatalog_v1_cloud_sql_big_query_connection_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec from a dict
google_cloud_datacatalog_v1_cloud_sql_big_query_connection_spec_from_dict = GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec.from_dict(google_cloud_datacatalog_v1_cloud_sql_big_query_connection_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


