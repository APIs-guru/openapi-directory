# GooglePlayDeveloperReportingV1beta1TimelineSpec

Specification of the time-related aggregation parameters of a timeline. Timelines have an aggregation period (`DAILY`, `HOURLY`, etc) which defines how events are aggregated in metrics. The points in a timeline are defined by the starting DateTime of the aggregation period. The duration is implicit in the AggregationPeriod. Hourly aggregation periods, when supported by a metric set, are always specified in UTC to avoid ambiguities around daylight saving time transitions, where an hour is skipped when adopting DST, and repeated when abandoning DST. For example, the timestamp '2021-11-07 01:00:00 America/Los_Angeles' is ambiguous since it can correspond to '2021-11-07 08:00:00 UTC' or '2021-11-07 09:00:00 UTC'. Daily aggregation periods require specifying a timezone which will determine the precise instants of the start and the end of the day. Not all metric sets support all timezones, so make sure to check which timezones are supported by the metric set you want to query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_period** | **str** | Type of the aggregation period of the datapoints in the timeline. Intervals are identified by the date and time at the start of the interval. | [optional] 
**end_time** | [**GoogleTypeDateTime**](GoogleTypeDateTime.md) |  | [optional] 
**start_time** | [**GoogleTypeDateTime**](GoogleTypeDateTime.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1beta1_timeline_spec import GooglePlayDeveloperReportingV1beta1TimelineSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1beta1TimelineSpec from a JSON string
google_play_developer_reporting_v1beta1_timeline_spec_instance = GooglePlayDeveloperReportingV1beta1TimelineSpec.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1beta1TimelineSpec.to_json())

# convert the object into a dict
google_play_developer_reporting_v1beta1_timeline_spec_dict = google_play_developer_reporting_v1beta1_timeline_spec_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1beta1TimelineSpec from a dict
google_play_developer_reporting_v1beta1_timeline_spec_from_dict = GooglePlayDeveloperReportingV1beta1TimelineSpec.from_dict(google_play_developer_reporting_v1beta1_timeline_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


