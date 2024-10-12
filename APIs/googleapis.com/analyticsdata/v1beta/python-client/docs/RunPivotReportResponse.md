# RunPivotReportResponse

The response pivot report table corresponding to a pivot request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregates** | [**List[Row]**](Row.md) | Aggregation of metric values. Can be totals, minimums, or maximums. The returned aggregations are controlled by the metric_aggregations in the pivot. The type of aggregation returned in each row is shown by the dimension_values which are set to \&quot;RESERVED_\&quot;. | [optional] 
**dimension_headers** | [**List[DimensionHeader]**](DimensionHeader.md) | Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows. | [optional] 
**kind** | **str** | Identifies what kind of resource this message is. This &#x60;kind&#x60; is always the fixed string \&quot;analyticsData#runPivotReport\&quot;. Useful to distinguish between response types in JSON. | [optional] 
**metadata** | [**ResponseMetaData**](ResponseMetaData.md) |  | [optional] 
**metric_headers** | [**List[MetricHeader]**](MetricHeader.md) | Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows. | [optional] 
**pivot_headers** | [**List[PivotHeader]**](PivotHeader.md) | Summarizes the columns and rows created by a pivot. Each pivot in the request produces one header in the response. If we have a request like this: \&quot;pivots\&quot;: [{ \&quot;fieldNames\&quot;: [\&quot;country\&quot;, \&quot;city\&quot;] }, { \&quot;fieldNames\&quot;: \&quot;eventName\&quot; }] We will have the following &#x60;pivotHeaders&#x60; in the response: \&quot;pivotHeaders\&quot; : [{ \&quot;dimensionHeaders\&quot;: [{ \&quot;dimensionValues\&quot;: [ { \&quot;value\&quot;: \&quot;United Kingdom\&quot; }, { \&quot;value\&quot;: \&quot;London\&quot; } ] }, { \&quot;dimensionValues\&quot;: [ { \&quot;value\&quot;: \&quot;Japan\&quot; }, { \&quot;value\&quot;: \&quot;Osaka\&quot; } ] }] }, { \&quot;dimensionHeaders\&quot;: [{ \&quot;dimensionValues\&quot;: [{ \&quot;value\&quot;: \&quot;session_start\&quot; }] }, { \&quot;dimensionValues\&quot;: [{ \&quot;value\&quot;: \&quot;scroll\&quot; }] }] }] | [optional] 
**property_quota** | [**PropertyQuota**](PropertyQuota.md) |  | [optional] 
**rows** | [**List[Row]**](Row.md) | Rows of dimension value combinations and metric values in the report. | [optional] 

## Example

```python
from openapi_client.models.run_pivot_report_response import RunPivotReportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RunPivotReportResponse from a JSON string
run_pivot_report_response_instance = RunPivotReportResponse.from_json(json)
# print the JSON string representation of the object
print(RunPivotReportResponse.to_json())

# convert the object into a dict
run_pivot_report_response_dict = run_pivot_report_response_instance.to_dict()
# create an instance of RunPivotReportResponse from a dict
run_pivot_report_response_from_dict = RunPivotReportResponse.from_dict(run_pivot_report_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


