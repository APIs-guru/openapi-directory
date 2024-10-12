# RunPivotReportRequest

The request to generate a pivot report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cohort_spec** | [**CohortSpec**](CohortSpec.md) |  | [optional] 
**currency_code** | **str** | A currency code in ISO4217 format, such as \&quot;AED\&quot;, \&quot;USD\&quot;, \&quot;JPY\&quot;. If the field is empty, the report uses the property&#39;s default currency. | [optional] 
**date_ranges** | [**List[DateRange]**](DateRange.md) | The date range to retrieve event data for the report. If multiple date ranges are specified, event data from each date range is used in the report. A special dimension with field name \&quot;dateRange\&quot; can be included in a Pivot&#39;s field names; if included, the report compares between date ranges. In a cohort request, this &#x60;dateRanges&#x60; must be unspecified. | [optional] 
**dimension_filter** | [**FilterExpression**](FilterExpression.md) |  | [optional] 
**dimensions** | [**List[Dimension]**](Dimension.md) | The dimensions requested. All defined dimensions must be used by one of the following: dimension_expression, dimension_filter, pivots, order_bys. | [optional] 
**keep_empty_rows** | **bool** | If false or unspecified, each row with all metrics equal to 0 will not be returned. If true, these rows will be returned if they are not separately removed by a filter. Regardless of this &#x60;keep_empty_rows&#x60; setting, only data recorded by the Google Analytics (GA4) property can be displayed in a report. For example if a property never logs a &#x60;purchase&#x60; event, then a query for the &#x60;eventName&#x60; dimension and &#x60;eventCount&#x60; metric will not have a row eventName: \&quot;purchase\&quot; and eventCount: 0. | [optional] 
**metric_filter** | [**FilterExpression**](FilterExpression.md) |  | [optional] 
**metrics** | [**List[Metric]**](Metric.md) | The metrics requested, at least one metric needs to be specified. All defined metrics must be used by one of the following: metric_expression, metric_filter, order_bys. | [optional] 
**pivots** | [**List[Pivot]**](Pivot.md) | Describes the visual format of the report&#39;s dimensions in columns or rows. The union of the fieldNames (dimension names) in all pivots must be a subset of dimension names defined in Dimensions. No two pivots can share a dimension. A dimension is only visible if it appears in a pivot. | [optional] 
**var_property** | **str** | A Google Analytics GA4 property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234 | [optional] 
**return_property_quota** | **bool** | Toggles whether to return the current state of this Analytics Property&#39;s quota. Quota is returned in [PropertyQuota](#PropertyQuota). | [optional] 

## Example

```python
from openapi_client.models.run_pivot_report_request import RunPivotReportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RunPivotReportRequest from a JSON string
run_pivot_report_request_instance = RunPivotReportRequest.from_json(json)
# print the JSON string representation of the object
print(RunPivotReportRequest.to_json())

# convert the object into a dict
run_pivot_report_request_dict = run_pivot_report_request_instance.to_dict()
# create an instance of RunPivotReportRequest from a dict
run_pivot_report_request_from_dict = RunPivotReportRequest.from_dict(run_pivot_report_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


