# GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence

A sequence of time series.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | **Dict[str, str]** | Map of dimensions and their values that uniquely identifies a time series sequence. | [optional] 
**points** | **List[List[object]]** | List of points. First value of each inner list is a timestamp. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_query_time_series_stats_response_sequence import GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence from a JSON string
google_cloud_apigee_v1_query_time_series_stats_response_sequence_instance = GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence.to_json())

# convert the object into a dict
google_cloud_apigee_v1_query_time_series_stats_response_sequence_dict = google_cloud_apigee_v1_query_time_series_stats_response_sequence_instance.to_dict()
# create an instance of GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence from a dict
google_cloud_apigee_v1_query_time_series_stats_response_sequence_from_dict = GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence.from_dict(google_cloud_apigee_v1_query_time_series_stats_response_sequence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


