# PerformanceReport

The configuration data for an Ad Exchange performance report list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bid_rate** | **float** | The number of bid responses with an ad. | [optional] 
**bid_request_rate** | **float** | The number of bid requests sent to your bidder. | [optional] 
**callout_status_rate** | **List[object]** | Rate of various prefiltering statuses per match. Please refer to the callout-status-codes.txt file for different statuses. | [optional] 
**cookie_matcher_status_rate** | **List[object]** | Average QPS for cookie matcher operations. | [optional] 
**creative_status_rate** | **List[object]** | Rate of ads with a given status. Please refer to the creative-status-codes.txt file for different statuses. | [optional] 
**filtered_bid_rate** | **float** | The number of bid responses that were filtered due to a policy violation or other errors. | [optional] 
**hosted_match_status_rate** | **List[object]** | Average QPS for hosted match operations. | [optional] 
**inventory_match_rate** | **float** | The number of potential queries based on your pretargeting settings. | [optional] 
**kind** | **str** | Resource type. | [optional] [default to 'adexchangebuyer#performanceReport']
**latency50th_percentile** | **float** | The 50th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report. | [optional] 
**latency85th_percentile** | **float** | The 85th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report. | [optional] 
**latency95th_percentile** | **float** | The 95th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report. | [optional] 
**no_quota_in_region** | **float** | Rate of various quota account statuses per quota check. | [optional] 
**out_of_quota** | **float** | Rate of various quota account statuses per quota check. | [optional] 
**pixel_match_requests** | **float** | Average QPS for pixel match requests from clients. | [optional] 
**pixel_match_responses** | **float** | Average QPS for pixel match responses from clients. | [optional] 
**quota_configured_limit** | **float** | The configured quota limits for this account. | [optional] 
**quota_throttled_limit** | **float** | The throttled quota limits for this account. | [optional] 
**region** | **str** | The trading location of this data. | [optional] 
**successful_request_rate** | **float** | The number of properly formed bid responses received by our servers within the deadline. | [optional] 
**timestamp** | **str** | The unix timestamp of the starting time of this performance data. | [optional] 
**unsuccessful_request_rate** | **float** | The number of bid responses that were unsuccessful due to timeouts, incorrect formatting, etc. | [optional] 

## Example

```python
from openapi_client.models.performance_report import PerformanceReport

# TODO update the JSON string below
json = "{}"
# create an instance of PerformanceReport from a JSON string
performance_report_instance = PerformanceReport.from_json(json)
# print the JSON string representation of the object
print(PerformanceReport.to_json())

# convert the object into a dict
performance_report_dict = performance_report_instance.to_dict()
# create an instance of PerformanceReport from a dict
performance_report_from_dict = PerformanceReport.from_dict(performance_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


