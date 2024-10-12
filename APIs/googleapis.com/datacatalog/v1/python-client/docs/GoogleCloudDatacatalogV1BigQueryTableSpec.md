# GoogleCloudDatacatalogV1BigQueryTableSpec

Describes a BigQuery table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table_source_type** | **str** | Output only. The table source type. | [optional] [readonly] 
**table_spec** | [**GoogleCloudDatacatalogV1TableSpec**](GoogleCloudDatacatalogV1TableSpec.md) |  | [optional] 
**view_spec** | [**GoogleCloudDatacatalogV1ViewSpec**](GoogleCloudDatacatalogV1ViewSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_big_query_table_spec import GoogleCloudDatacatalogV1BigQueryTableSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1BigQueryTableSpec from a JSON string
google_cloud_datacatalog_v1_big_query_table_spec_instance = GoogleCloudDatacatalogV1BigQueryTableSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1BigQueryTableSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_big_query_table_spec_dict = google_cloud_datacatalog_v1_big_query_table_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1BigQueryTableSpec from a dict
google_cloud_datacatalog_v1_big_query_table_spec_from_dict = GoogleCloudDatacatalogV1BigQueryTableSpec.from_dict(google_cloud_datacatalog_v1_big_query_table_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


