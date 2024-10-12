# RunRealtimeReportRequest

The request to generate a realtime report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_filter** | [**FilterExpression**](FilterExpression.md) |  | [optional] 
**dimensions** | [**List[Dimension]**](Dimension.md) | The dimensions requested and displayed. | [optional] 
**limit** | **str** | The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 250,000 rows per request, no matter how many you ask for. &#x60;limit&#x60; must be positive. The API can also return fewer rows than the requested &#x60;limit&#x60;, if there aren&#39;t as many dimension values as the &#x60;limit&#x60;. For instance, there are fewer than 300 possible values for the dimension &#x60;country&#x60;, so when reporting on only &#x60;country&#x60;, you can&#39;t get more than 300 rows, even if you set &#x60;limit&#x60; to a higher value. | [optional] 
**metric_aggregations** | **List[str]** | Aggregation of metrics. Aggregated metric values will be shown in rows where the dimension_values are set to \&quot;RESERVED_(MetricAggregation)\&quot;. | [optional] 
**metric_filter** | [**FilterExpression**](FilterExpression.md) |  | [optional] 
**metrics** | [**List[Metric]**](Metric.md) | The metrics requested and displayed. | [optional] 
**minute_ranges** | [**List[MinuteRange]**](MinuteRange.md) | The minute ranges of event data to read. If unspecified, one minute range for the last 30 minutes will be used. If multiple minute ranges are requested, each response row will contain a zero based minute range index. If two minute ranges overlap, the event data for the overlapping minutes is included in the response rows for both minute ranges. | [optional] 
**order_bys** | [**List[OrderBy]**](OrderBy.md) | Specifies how rows are ordered in the response. | [optional] 
**return_property_quota** | **bool** | Toggles whether to return the current state of this Analytics Property&#39;s Realtime quota. Quota is returned in [PropertyQuota](#PropertyQuota). | [optional] 

## Example

```python
from openapi_client.models.run_realtime_report_request import RunRealtimeReportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RunRealtimeReportRequest from a JSON string
run_realtime_report_request_instance = RunRealtimeReportRequest.from_json(json)
# print the JSON string representation of the object
print(RunRealtimeReportRequest.to_json())

# convert the object into a dict
run_realtime_report_request_dict = run_realtime_report_request_instance.to_dict()
# create an instance of RunRealtimeReportRequest from a dict
run_realtime_report_request_from_dict = RunRealtimeReportRequest.from_dict(run_realtime_report_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


