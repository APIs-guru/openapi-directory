# RunRealtimeReportResponse

The response realtime report table corresponding to a request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_headers** | [**List[DimensionHeader]**](DimensionHeader.md) | Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows. | [optional] 
**kind** | **str** | Identifies what kind of resource this message is. This &#x60;kind&#x60; is always the fixed string \&quot;analyticsData#runRealtimeReport\&quot;. Useful to distinguish between response types in JSON. | [optional] 
**maximums** | [**List[Row]**](Row.md) | If requested, the maximum values of metrics. | [optional] 
**metric_headers** | [**List[MetricHeader]**](MetricHeader.md) | Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows. | [optional] 
**minimums** | [**List[Row]**](Row.md) | If requested, the minimum values of metrics. | [optional] 
**property_quota** | [**PropertyQuota**](PropertyQuota.md) |  | [optional] 
**row_count** | **int** | The total number of rows in the query result. &#x60;rowCount&#x60; is independent of the number of rows returned in the response and the &#x60;limit&#x60; request parameter. For example if a query returns 175 rows and includes &#x60;limit&#x60; of 50 in the API request, the response will contain &#x60;rowCount&#x60; of 175 but only 50 rows. | [optional] 
**rows** | [**List[Row]**](Row.md) | Rows of dimension value combinations and metric values in the report. | [optional] 
**totals** | [**List[Row]**](Row.md) | If requested, the totaled values of metrics. | [optional] 

## Example

```python
from openapi_client.models.run_realtime_report_response import RunRealtimeReportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RunRealtimeReportResponse from a JSON string
run_realtime_report_response_instance = RunRealtimeReportResponse.from_json(json)
# print the JSON string representation of the object
print(RunRealtimeReportResponse.to_json())

# convert the object into a dict
run_realtime_report_response_dict = run_realtime_report_response_instance.to_dict()
# create an instance of RunRealtimeReportResponse from a dict
run_realtime_report_response_from_dict = RunRealtimeReportResponse.from_dict(run_realtime_report_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


