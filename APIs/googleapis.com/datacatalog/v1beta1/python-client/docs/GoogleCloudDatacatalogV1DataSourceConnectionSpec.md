# GoogleCloudDatacatalogV1DataSourceConnectionSpec

Specification that applies to a data source connection. Valid only for entries with the `DATA_SOURCE_CONNECTION` type. Only one of internal specs can be set at the time, and cannot be changed later.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_connection_spec** | [**GoogleCloudDatacatalogV1BigQueryConnectionSpec**](GoogleCloudDatacatalogV1BigQueryConnectionSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_data_source_connection_spec import GoogleCloudDatacatalogV1DataSourceConnectionSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1DataSourceConnectionSpec from a JSON string
google_cloud_datacatalog_v1_data_source_connection_spec_instance = GoogleCloudDatacatalogV1DataSourceConnectionSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1DataSourceConnectionSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_data_source_connection_spec_dict = google_cloud_datacatalog_v1_data_source_connection_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1DataSourceConnectionSpec from a dict
google_cloud_datacatalog_v1_data_source_connection_spec_from_dict = GoogleCloudDatacatalogV1DataSourceConnectionSpec.from_dict(google_cloud_datacatalog_v1_data_source_connection_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


