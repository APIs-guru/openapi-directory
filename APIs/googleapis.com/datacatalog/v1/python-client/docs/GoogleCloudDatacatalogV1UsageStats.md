# GoogleCloudDatacatalogV1UsageStats

Detailed statistics on the entry's usage. Usage statistics have the following limitations: - Only BigQuery tables have them. - They only include BigQuery query jobs. - They might be underestimated because wildcard table references are not yet counted. For more information, see [Querying multiple tables using a wildcard table] (https://cloud.google.com/bigquery/docs/querying-wildcard-tables)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_cancellations** | **float** | The number of cancelled attempts to use the underlying entry. | [optional] 
**total_completions** | **float** | The number of successful uses of the underlying entry. | [optional] 
**total_execution_time_for_completions_millis** | **float** | Total time spent only on successful uses, in milliseconds. | [optional] 
**total_failures** | **float** | The number of failed attempts to use the underlying entry. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_usage_stats import GoogleCloudDatacatalogV1UsageStats

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1UsageStats from a JSON string
google_cloud_datacatalog_v1_usage_stats_instance = GoogleCloudDatacatalogV1UsageStats.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1UsageStats.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_usage_stats_dict = google_cloud_datacatalog_v1_usage_stats_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1UsageStats from a dict
google_cloud_datacatalog_v1_usage_stats_from_dict = GoogleCloudDatacatalogV1UsageStats.from_dict(google_cloud_datacatalog_v1_usage_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


