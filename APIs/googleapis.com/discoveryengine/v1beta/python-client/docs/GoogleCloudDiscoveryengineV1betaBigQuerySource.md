# GoogleCloudDiscoveryengineV1betaBigQuerySource

BigQuery source import data from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_schema** | **str** | The schema to use when parsing the data from the source. Supported values for user event imports: * &#x60;user_event&#x60; (default): One UserEvent per row. Supported values for document imports: * &#x60;document&#x60; (default): One Document format per row. Each document must have a valid Document.id and one of Document.json_data or Document.struct_data. * &#x60;custom&#x60;: One custom data per row in arbitrary format that conforms to the defined Schema of the data store. This can only be used by Gen App Builder. | [optional] 
**dataset_id** | **str** | Required. The BigQuery data set to copy the data from with a length limit of 1,024 characters. | [optional] 
**gcs_staging_dir** | **str** | Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory. | [optional] 
**partition_date** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 
**project_id** | **str** | The project ID (can be project # or ID) that the BigQuery source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request. | [optional] 
**table_id** | **str** | Required. The BigQuery table to copy the data from with a length limit of 1,024 characters. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_big_query_source import GoogleCloudDiscoveryengineV1betaBigQuerySource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaBigQuerySource from a JSON string
google_cloud_discoveryengine_v1beta_big_query_source_instance = GoogleCloudDiscoveryengineV1betaBigQuerySource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaBigQuerySource.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_big_query_source_dict = google_cloud_discoveryengine_v1beta_big_query_source_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaBigQuerySource from a dict
google_cloud_discoveryengine_v1beta_big_query_source_from_dict = GoogleCloudDiscoveryengineV1betaBigQuerySource.from_dict(google_cloud_discoveryengine_v1beta_big_query_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


