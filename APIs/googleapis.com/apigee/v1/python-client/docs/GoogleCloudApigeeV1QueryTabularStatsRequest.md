# GoogleCloudApigeeV1QueryTabularStatsRequest

Request payload representing the query to be run for fetching security statistics as rows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | **List[str]** | Required. List of dimension names to group the aggregations by. | [optional] 
**filter** | **str** | Filter further on specific dimension values. Follows the same grammar as custom report&#39;s filter expressions. Example, apiproxy eq &#39;foobar&#39;. https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference#filters | [optional] 
**metrics** | [**List[GoogleCloudApigeeV1MetricAggregation]**](GoogleCloudApigeeV1MetricAggregation.md) | Required. List of metrics and their aggregations. | [optional] 
**page_size** | **int** | Page size represents the number of rows. | [optional] 
**page_token** | **str** | Identifies a sequence of rows. | [optional] 
**time_range** | [**GoogleTypeInterval**](GoogleTypeInterval.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_query_tabular_stats_request import GoogleCloudApigeeV1QueryTabularStatsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1QueryTabularStatsRequest from a JSON string
google_cloud_apigee_v1_query_tabular_stats_request_instance = GoogleCloudApigeeV1QueryTabularStatsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1QueryTabularStatsRequest.to_json())

# convert the object into a dict
google_cloud_apigee_v1_query_tabular_stats_request_dict = google_cloud_apigee_v1_query_tabular_stats_request_instance.to_dict()
# create an instance of GoogleCloudApigeeV1QueryTabularStatsRequest from a dict
google_cloud_apigee_v1_query_tabular_stats_request_from_dict = GoogleCloudApigeeV1QueryTabularStatsRequest.from_dict(google_cloud_apigee_v1_query_tabular_stats_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


