# RunReportRequest

The request to generate a report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cohort_spec** | [**CohortSpec**](CohortSpec.md) |  | [optional] 
**currency_code** | **str** | A currency code in ISO4217 format, such as \&quot;AED\&quot;, \&quot;USD\&quot;, \&quot;JPY\&quot;. If the field is empty, the report uses the property&#39;s default currency. | [optional] 
**date_ranges** | [**List[DateRange]**](DateRange.md) | Date ranges of data to read. If multiple date ranges are requested, each response row will contain a zero based date range index. If two date ranges overlap, the event data for the overlapping days is included in the response rows for both date ranges. In a cohort request, this &#x60;dateRanges&#x60; must be unspecified. | [optional] 
**dimension_filter** | [**FilterExpression**](FilterExpression.md) |  | [optional] 
**dimensions** | [**List[Dimension]**](Dimension.md) | The dimensions requested and displayed. | [optional] 
**keep_empty_rows** | **bool** | If false or unspecified, each row with all metrics equal to 0 will not be returned. If true, these rows will be returned if they are not separately removed by a filter. Regardless of this &#x60;keep_empty_rows&#x60; setting, only data recorded by the Google Analytics (GA4) property can be displayed in a report. For example if a property never logs a &#x60;purchase&#x60; event, then a query for the &#x60;eventName&#x60; dimension and &#x60;eventCount&#x60; metric will not have a row eventName: \&quot;purchase\&quot; and eventCount: 0. | [optional] 
**limit** | **str** | The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 250,000 rows per request, no matter how many you ask for. &#x60;limit&#x60; must be positive. The API can also return fewer rows than the requested &#x60;limit&#x60;, if there aren&#39;t as many dimension values as the &#x60;limit&#x60;. For instance, there are fewer than 300 possible values for the dimension &#x60;country&#x60;, so when reporting on only &#x60;country&#x60;, you can&#39;t get more than 300 rows, even if you set &#x60;limit&#x60; to a higher value. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). | [optional] 
**metric_aggregations** | **List[str]** | Aggregation of metrics. Aggregated metric values will be shown in rows where the dimension_values are set to \&quot;RESERVED_(MetricAggregation)\&quot;. | [optional] 
**metric_filter** | [**FilterExpression**](FilterExpression.md) |  | [optional] 
**metrics** | [**List[Metric]**](Metric.md) | The metrics requested and displayed. | [optional] 
**offset** | **str** | The row count of the start row. The first row is counted as row 0. When paging, the first request does not specify offset; or equivalently, sets offset to 0; the first request returns the first &#x60;limit&#x60; of rows. The second request sets offset to the &#x60;limit&#x60; of the first request; the second request returns the second &#x60;limit&#x60; of rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). | [optional] 
**order_bys** | [**List[OrderBy]**](OrderBy.md) | Specifies how rows are ordered in the response. | [optional] 
**var_property** | **str** | A Google Analytics GA4 property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234 | [optional] 
**return_property_quota** | **bool** | Toggles whether to return the current state of this Analytics Property&#39;s quota. Quota is returned in [PropertyQuota](#PropertyQuota). | [optional] 

## Example

```python
from openapi_client.models.run_report_request import RunReportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RunReportRequest from a JSON string
run_report_request_instance = RunReportRequest.from_json(json)
# print the JSON string representation of the object
print(RunReportRequest.to_json())

# convert the object into a dict
run_report_request_dict = run_report_request_instance.to_dict()
# create an instance of RunReportRequest from a dict
run_report_request_from_dict = RunReportRequest.from_dict(run_report_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


