# ReportRequest

The main request class which specifies the Reporting API request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cohort_group** | [**CohortGroup**](CohortGroup.md) |  | [optional] 
**date_ranges** | [**List[DateRange]**](DateRange.md) | Date ranges in the request. The request can have a maximum of 2 date ranges. The response will contain a set of metric values for each combination of the dimensions for each date range in the request. So, if there are two date ranges, there will be two set of metric values, one for the original date range and one for the second date range. The &#x60;reportRequest.dateRanges&#x60; field should not be specified for cohorts or Lifetime value requests. If a date range is not provided, the default date range is (startDate: current date - 7 days, endDate: current date - 1 day). Every [ReportRequest](#ReportRequest) within a &#x60;batchGet&#x60; method must contain the same &#x60;dateRanges&#x60; definition. | [optional] 
**dimension_filter_clauses** | [**List[DimensionFilterClause]**](DimensionFilterClause.md) | The dimension filter clauses for filtering Dimension Values. They are logically combined with the &#x60;AND&#x60; operator. Note that filtering occurs before any dimensions are aggregated, so that the returned metrics represent the total for only the relevant dimensions. | [optional] 
**dimensions** | [**List[Dimension]**](Dimension.md) | The dimensions requested. Requests can have a total of 9 dimensions. | [optional] 
**filters_expression** | **str** | Dimension or metric filters that restrict the data returned for your request. To use the &#x60;filtersExpression&#x60;, supply a dimension or metric on which to filter, followed by the filter expression. For example, the following expression selects &#x60;ga:browser&#x60; dimension which starts with Firefox; &#x60;ga:browser&#x3D;~^Firefox&#x60;. For more information on dimensions and metric filters, see [Filters reference](https://developers.google.com/analytics/devguides/reporting/core/v3/reference#filters). | [optional] 
**hide_totals** | **bool** | If set to true, hides the total of all metrics for all the matching rows, for every date range. The default false and will return the totals. | [optional] 
**hide_value_ranges** | **bool** | If set to true, hides the minimum and maximum across all matching rows. The default is false and the value ranges are returned. | [optional] 
**include_empty_rows** | **bool** | If set to false, the response does not include rows if all the retrieved metrics are equal to zero. The default is false which will exclude these rows. | [optional] 
**metric_filter_clauses** | [**List[MetricFilterClause]**](MetricFilterClause.md) | The metric filter clauses. They are logically combined with the &#x60;AND&#x60; operator. Metric filters look at only the first date range and not the comparing date range. Note that filtering on metrics occurs after the metrics are aggregated. | [optional] 
**metrics** | [**List[Metric]**](Metric.md) | The metrics requested. Requests must specify at least one metric. Requests can have a total of 10 metrics. | [optional] 
**order_bys** | [**List[OrderBy]**](OrderBy.md) | Sort order on output rows. To compare two rows, the elements of the following are applied in order until a difference is found. All date ranges in the output get the same row order. | [optional] 
**page_size** | **int** | Page size is for paging and specifies the maximum number of returned rows. Page size should be &gt;&#x3D; 0. A query returns the default of 1,000 rows. The Analytics Core Reporting API returns a maximum of 100,000 rows per request, no matter how many you ask for. It can also return fewer rows than requested, if there aren&#39;t as many dimension segments as you expect. For instance, there are fewer than 300 possible values for &#x60;ga:country&#x60;, so when segmenting only by country, you can&#39;t get more than 300 rows, even if you set &#x60;pageSize&#x60; to a higher value. | [optional] 
**page_token** | **str** | A continuation token to get the next page of the results. Adding this to the request will return the rows after the pageToken. The pageToken should be the value returned in the nextPageToken parameter in the response to the GetReports request. | [optional] 
**pivots** | [**List[Pivot]**](Pivot.md) | The pivot definitions. Requests can have a maximum of 2 pivots. | [optional] 
**sampling_level** | **str** | The desired report [sample](https://support.google.com/analytics/answer/2637192) size. If the the &#x60;samplingLevel&#x60; field is unspecified the &#x60;DEFAULT&#x60; sampling level is used. Every [ReportRequest](#ReportRequest) within a &#x60;batchGet&#x60; method must contain the same &#x60;samplingLevel&#x60; definition. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details. | [optional] 
**segments** | [**List[Segment]**](Segment.md) | Segment the data returned for the request. A segment definition helps look at a subset of the segment request. A request can contain up to four segments. Every [ReportRequest](#ReportRequest) within a &#x60;batchGet&#x60; method must contain the same &#x60;segments&#x60; definition. Requests with segments must have the &#x60;ga:segment&#x60; dimension. | [optional] 
**view_id** | **str** | The Analytics [view ID](https://support.google.com/analytics/answer/1009618) from which to retrieve data. Every [ReportRequest](#ReportRequest) within a &#x60;batchGet&#x60; method must contain the same &#x60;viewId&#x60;. | [optional] 

## Example

```python
from openapi_client.models.report_request import ReportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReportRequest from a JSON string
report_request_instance = ReportRequest.from_json(json)
# print the JSON string representation of the object
print(ReportRequest.to_json())

# convert the object into a dict
report_request_dict = report_request_instance.to_dict()
# create an instance of ReportRequest from a dict
report_request_from_dict = ReportRequest.from_dict(report_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


