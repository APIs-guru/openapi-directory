# GoogleCloudApigeeV1QueryTimeSeriesStatsResponse

Represents security stats result as a collection of time series sequences.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **List[str]** | Column names corresponding to the same order as the inner values in the stats field. | [optional] 
**next_page_token** | **str** | Next page token. | [optional] 
**values** | [**List[GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence]**](GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence.md) | Results of the query returned as a JSON array. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_query_time_series_stats_response import GoogleCloudApigeeV1QueryTimeSeriesStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1QueryTimeSeriesStatsResponse from a JSON string
google_cloud_apigee_v1_query_time_series_stats_response_instance = GoogleCloudApigeeV1QueryTimeSeriesStatsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1QueryTimeSeriesStatsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_query_time_series_stats_response_dict = google_cloud_apigee_v1_query_time_series_stats_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1QueryTimeSeriesStatsResponse from a dict
google_cloud_apigee_v1_query_time_series_stats_response_from_dict = GoogleCloudApigeeV1QueryTimeSeriesStatsResponse.from_dict(google_cloud_apigee_v1_query_time_series_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


