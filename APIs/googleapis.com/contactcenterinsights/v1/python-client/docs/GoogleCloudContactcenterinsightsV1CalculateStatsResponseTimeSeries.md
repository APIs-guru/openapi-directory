# GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries

A time series representing conversations over time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interval_duration** | **str** | The duration of each interval. | [optional] 
**points** | [**List[GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval]**](GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval.md) | An ordered list of intervals from earliest to latest, where each interval represents the number of conversations that transpired during the time window. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_calculate_stats_response_time_series import GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries from a JSON string
google_cloud_contactcenterinsights_v1_calculate_stats_response_time_series_instance = GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_calculate_stats_response_time_series_dict = google_cloud_contactcenterinsights_v1_calculate_stats_response_time_series_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries from a dict
google_cloud_contactcenterinsights_v1_calculate_stats_response_time_series_from_dict = GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries.from_dict(google_cloud_contactcenterinsights_v1_calculate_stats_response_time_series_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


