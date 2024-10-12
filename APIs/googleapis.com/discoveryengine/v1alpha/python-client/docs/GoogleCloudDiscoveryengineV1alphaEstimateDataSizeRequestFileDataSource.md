# GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestFileDataSource

Data source contains files either in Cloud Storage or BigQuery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_source** | [**GoogleCloudDiscoveryengineV1alphaBigQuerySource**](GoogleCloudDiscoveryengineV1alphaBigQuerySource.md) |  | [optional] 
**gcs_source** | [**GoogleCloudDiscoveryengineV1alphaGcsSource**](GoogleCloudDiscoveryengineV1alphaGcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_estimate_data_size_request_file_data_source import GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestFileDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestFileDataSource from a JSON string
google_cloud_discoveryengine_v1alpha_estimate_data_size_request_file_data_source_instance = GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestFileDataSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestFileDataSource.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_estimate_data_size_request_file_data_source_dict = google_cloud_discoveryengine_v1alpha_estimate_data_size_request_file_data_source_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestFileDataSource from a dict
google_cloud_discoveryengine_v1alpha_estimate_data_size_request_file_data_source_from_dict = GoogleCloudDiscoveryengineV1alphaEstimateDataSizeRequestFileDataSource.from_dict(google_cloud_discoveryengine_v1alpha_estimate_data_size_request_file_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


