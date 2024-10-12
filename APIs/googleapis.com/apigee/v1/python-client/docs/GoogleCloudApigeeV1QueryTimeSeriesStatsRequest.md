# GoogleCloudApigeeV1QueryTimeSeriesStatsRequest

QueryTimeSeriesStatsRequest represents a query that returns a collection of time series sequences grouped by their values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | **List[str]** | List of dimension names to group the aggregations by. If no dimensions are passed, a single trend line representing the requested metric aggregations grouped by environment is returned. | [optional] 
**filter** | **str** | Filter further on specific dimension values. Follows the same grammar as custom report&#39;s filter expressions. Example, apiproxy eq &#39;foobar&#39;. https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference#filters | [optional] 
**metrics** | [**List[GoogleCloudApigeeV1MetricAggregation]**](GoogleCloudApigeeV1MetricAggregation.md) | Required. List of metrics and their aggregations. | [optional] 
**page_size** | **int** | Page size represents the number of time series sequences, one per unique set of dimensions and their values. | [optional] 
**page_token** | **str** | Page token stands for a specific collection of time series sequences. | [optional] 
**time_range** | [**GoogleTypeInterval**](GoogleTypeInterval.md) |  | [optional] 
**timestamp_order** | **str** | Order the sequences in increasing or decreasing order of timestamps. Default is descending order of timestamps (latest first). | [optional] 
**window_size** | **str** | Time buckets to group the stats by. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_query_time_series_stats_request import GoogleCloudApigeeV1QueryTimeSeriesStatsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1QueryTimeSeriesStatsRequest from a JSON string
google_cloud_apigee_v1_query_time_series_stats_request_instance = GoogleCloudApigeeV1QueryTimeSeriesStatsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1QueryTimeSeriesStatsRequest.to_json())

# convert the object into a dict
google_cloud_apigee_v1_query_time_series_stats_request_dict = google_cloud_apigee_v1_query_time_series_stats_request_instance.to_dict()
# create an instance of GoogleCloudApigeeV1QueryTimeSeriesStatsRequest from a dict
google_cloud_apigee_v1_query_time_series_stats_request_from_dict = GoogleCloudApigeeV1QueryTimeSeriesStatsRequest.from_dict(google_cloud_apigee_v1_query_time_series_stats_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


