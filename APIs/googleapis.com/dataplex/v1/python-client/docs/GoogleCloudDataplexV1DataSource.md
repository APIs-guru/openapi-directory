# GoogleCloudDataplexV1DataSource

The data source for DataScan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Immutable. The Dataplex entity that represents the data source (e.g. BigQuery table) for DataScan, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}. | [optional] 
**resource** | **str** | Immutable. The service-qualified full resource name of the cloud resource for a DataScan job to scan against. The field could be: BigQuery table of type \&quot;TABLE\&quot; for DataProfileScan/DataQualityScan Format: //bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_source import GoogleCloudDataplexV1DataSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataSource from a JSON string
google_cloud_dataplex_v1_data_source_instance = GoogleCloudDataplexV1DataSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataSource.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_source_dict = google_cloud_dataplex_v1_data_source_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataSource from a dict
google_cloud_dataplex_v1_data_source_from_dict = GoogleCloudDataplexV1DataSource.from_dict(google_cloud_dataplex_v1_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


