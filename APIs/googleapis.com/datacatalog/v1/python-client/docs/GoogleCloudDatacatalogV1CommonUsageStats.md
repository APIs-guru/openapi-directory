# GoogleCloudDatacatalogV1CommonUsageStats

Common statistics on the entry's usage. They can be set on any system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**view_count** | **str** | View count in source system. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_common_usage_stats import GoogleCloudDatacatalogV1CommonUsageStats

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1CommonUsageStats from a JSON string
google_cloud_datacatalog_v1_common_usage_stats_instance = GoogleCloudDatacatalogV1CommonUsageStats.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1CommonUsageStats.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_common_usage_stats_dict = google_cloud_datacatalog_v1_common_usage_stats_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1CommonUsageStats from a dict
google_cloud_datacatalog_v1_common_usage_stats_from_dict = GoogleCloudDatacatalogV1CommonUsageStats.from_dict(google_cloud_datacatalog_v1_common_usage_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


