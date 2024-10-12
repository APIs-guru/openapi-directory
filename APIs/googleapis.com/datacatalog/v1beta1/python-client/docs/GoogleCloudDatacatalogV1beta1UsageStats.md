# GoogleCloudDatacatalogV1beta1UsageStats

Detailed counts on the entry's usage. Caveats: - Only BigQuery tables have usage stats - The usage stats only include BigQuery query jobs - The usage stats might be underestimated, e.g. wildcard table references are not yet counted in usage computation https://cloud.google.com/bigquery/docs/querying-wildcard-tables

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_cancellations** | **float** | The number of times that the underlying entry was attempted to be used but was cancelled by the user. | [optional] 
**total_completions** | **float** | The number of times that the underlying entry was successfully used. | [optional] 
**total_execution_time_for_completions_millis** | **float** | Total time spent (in milliseconds) during uses the resulted in completions. | [optional] 
**total_failures** | **float** | The number of times that the underlying entry was attempted to be used but failed. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_usage_stats import GoogleCloudDatacatalogV1beta1UsageStats

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1UsageStats from a JSON string
google_cloud_datacatalog_v1beta1_usage_stats_instance = GoogleCloudDatacatalogV1beta1UsageStats.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1UsageStats.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_usage_stats_dict = google_cloud_datacatalog_v1beta1_usage_stats_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1UsageStats from a dict
google_cloud_datacatalog_v1beta1_usage_stats_from_dict = GoogleCloudDatacatalogV1beta1UsageStats.from_dict(google_cloud_datacatalog_v1beta1_usage_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


