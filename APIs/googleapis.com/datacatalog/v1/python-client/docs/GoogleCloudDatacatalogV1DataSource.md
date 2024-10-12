# GoogleCloudDatacatalogV1DataSource

Physical location of an entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | **str** | Full name of a resource as defined by the service. For example: &#x60;//bigquery.googleapis.com/projects/{PROJECT_ID}/locations/{LOCATION}/datasets/{DATASET_ID}/tables/{TABLE_ID}&#x60; | [optional] 
**service** | **str** | Service that physically stores the data. | [optional] 
**source_entry** | **str** | Output only. Data Catalog entry name, if applicable. | [optional] [readonly] 
**storage_properties** | [**GoogleCloudDatacatalogV1StorageProperties**](GoogleCloudDatacatalogV1StorageProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_data_source import GoogleCloudDatacatalogV1DataSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1DataSource from a JSON string
google_cloud_datacatalog_v1_data_source_instance = GoogleCloudDatacatalogV1DataSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1DataSource.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_data_source_dict = google_cloud_datacatalog_v1_data_source_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1DataSource from a dict
google_cloud_datacatalog_v1_data_source_from_dict = GoogleCloudDatacatalogV1DataSource.from_dict(google_cloud_datacatalog_v1_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


