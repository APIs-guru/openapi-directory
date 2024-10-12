# GoogleCloudDatacatalogV1UsageSignal

The set of all usage signals that Data Catalog stores. Note: Usually, these signals are updated daily. In rare cases, an update may fail but will be performed again on the next day.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_usage_within_time_range** | [**Dict[str, GoogleCloudDatacatalogV1CommonUsageStats]**](GoogleCloudDatacatalogV1CommonUsageStats.md) | Common usage statistics over each of the predefined time ranges. Supported time ranges are &#x60;{\&quot;24H\&quot;, \&quot;7D\&quot;, \&quot;30D\&quot;, \&quot;Lifetime\&quot;}&#x60;. | [optional] 
**favorite_count** | **str** | Favorite count in the source system. | [optional] 
**update_time** | **str** | The end timestamp of the duration of usage statistics. | [optional] 
**usage_within_time_range** | [**Dict[str, GoogleCloudDatacatalogV1UsageStats]**](GoogleCloudDatacatalogV1UsageStats.md) | Output only. BigQuery usage statistics over each of the predefined time ranges. Supported time ranges are &#x60;{\&quot;24H\&quot;, \&quot;7D\&quot;, \&quot;30D\&quot;}&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_usage_signal import GoogleCloudDatacatalogV1UsageSignal

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1UsageSignal from a JSON string
google_cloud_datacatalog_v1_usage_signal_instance = GoogleCloudDatacatalogV1UsageSignal.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1UsageSignal.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_usage_signal_dict = google_cloud_datacatalog_v1_usage_signal_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1UsageSignal from a dict
google_cloud_datacatalog_v1_usage_signal_from_dict = GoogleCloudDatacatalogV1UsageSignal.from_dict(google_cloud_datacatalog_v1_usage_signal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


