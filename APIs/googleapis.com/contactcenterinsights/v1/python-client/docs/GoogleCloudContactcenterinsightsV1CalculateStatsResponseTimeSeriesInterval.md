# GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval

A single interval in a time series.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_count** | **int** | The number of conversations created in this interval. | [optional] 
**start_time** | **str** | The start time of this interval. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_calculate_stats_response_time_series_interval import GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval from a JSON string
google_cloud_contactcenterinsights_v1_calculate_stats_response_time_series_interval_instance = GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_calculate_stats_response_time_series_interval_dict = google_cloud_contactcenterinsights_v1_calculate_stats_response_time_series_interval_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval from a dict
google_cloud_contactcenterinsights_v1_calculate_stats_response_time_series_interval_from_dict = GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval.from_dict(google_cloud_contactcenterinsights_v1_calculate_stats_response_time_series_interval_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


