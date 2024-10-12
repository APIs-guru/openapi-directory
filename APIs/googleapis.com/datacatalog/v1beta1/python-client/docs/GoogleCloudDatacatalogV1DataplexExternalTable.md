# GoogleCloudDatacatalogV1DataplexExternalTable

External table registered by Dataplex. Dataplex publishes data discovered from an asset into multiple other systems (BigQuery, DPMS) in form of tables. We call them \"external tables\". External tables are also synced into the Data Catalog. This message contains pointers to those external tables (fully qualified name, resource name et cetera) within the Data Catalog.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_catalog_entry** | **str** | Name of the Data Catalog entry representing the external table. | [optional] 
**fully_qualified_name** | **str** | Fully qualified name (FQN) of the external table. | [optional] 
**google_cloud_resource** | **str** | Google Cloud resource name of the external table. | [optional] 
**system** | **str** | Service in which the external table is registered. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_dataplex_external_table import GoogleCloudDatacatalogV1DataplexExternalTable

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1DataplexExternalTable from a JSON string
google_cloud_datacatalog_v1_dataplex_external_table_instance = GoogleCloudDatacatalogV1DataplexExternalTable.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1DataplexExternalTable.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_dataplex_external_table_dict = google_cloud_datacatalog_v1_dataplex_external_table_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1DataplexExternalTable from a dict
google_cloud_datacatalog_v1_dataplex_external_table_from_dict = GoogleCloudDatacatalogV1DataplexExternalTable.from_dict(google_cloud_datacatalog_v1_dataplex_external_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


