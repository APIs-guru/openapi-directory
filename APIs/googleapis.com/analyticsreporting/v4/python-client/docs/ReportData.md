# ReportData

The data part of the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_last_refreshed** | **str** | The last time the data in the report was refreshed. All the hits received before this timestamp are included in the calculation of the report. | [optional] 
**empty_reason** | **str** | If empty reason is specified, the report is empty for this reason. | [optional] 
**is_data_golden** | **bool** | Indicates if response to this request is golden or not. Data is golden when the exact same request will not produce any new results if asked at a later point in time. | [optional] 
**maximums** | [**List[DateRangeValues]**](DateRangeValues.md) | Minimum and maximum values seen over all matching rows. These are both empty when &#x60;hideValueRanges&#x60; in the request is false, or when rowCount is zero. | [optional] 
**minimums** | [**List[DateRangeValues]**](DateRangeValues.md) | Minimum and maximum values seen over all matching rows. These are both empty when &#x60;hideValueRanges&#x60; in the request is false, or when rowCount is zero. | [optional] 
**row_count** | **int** | Total number of matching rows for this query. | [optional] 
**rows** | [**List[ReportRow]**](ReportRow.md) | There&#39;s one ReportRow for every unique combination of dimensions. | [optional] 
**samples_read_counts** | **List[str]** | If the results are [sampled](https://support.google.com/analytics/answer/2637192), this returns the total number of samples read, one entry per date range. If the results are not sampled this field will not be defined. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details. | [optional] 
**sampling_space_sizes** | **List[str]** | If the results are [sampled](https://support.google.com/analytics/answer/2637192), this returns the total number of samples present, one entry per date range. If the results are not sampled this field will not be defined. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details. | [optional] 
**totals** | [**List[DateRangeValues]**](DateRangeValues.md) | For each requested date range, for the set of all rows that match the query, every requested value format gets a total. The total for a value format is computed by first totaling the metrics mentioned in the value format and then evaluating the value format as a scalar expression. E.g., The \&quot;totals\&quot; for &#x60;3 / (ga:sessions + 2)&#x60; we compute &#x60;3 / ((sum of all relevant ga:sessions) + 2)&#x60;. Totals are computed before pagination. | [optional] 

## Example

```python
from openapi_client.models.report_data import ReportData

# TODO update the JSON string below
json = "{}"
# create an instance of ReportData from a JSON string
report_data_instance = ReportData.from_json(json)
# print the JSON string representation of the object
print(ReportData.to_json())

# convert the object into a dict
report_data_dict = report_data_instance.to_dict()
# create an instance of ReportData from a dict
report_data_from_dict = ReportData.from_dict(report_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


