# ReportSummary

Describes the Summary view of a Report, which contains aggregated values for all the groups and preference sets included in this Report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_assets_stats** | [**ReportSummaryAssetAggregateStats**](ReportSummaryAssetAggregateStats.md) |  | [optional] 
**group_findings** | [**List[ReportSummaryGroupFinding]**](ReportSummaryGroupFinding.md) | Findings for each Group included in this report. | [optional] 

## Example

```python
from openapi_client.models.report_summary import ReportSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ReportSummary from a JSON string
report_summary_instance = ReportSummary.from_json(json)
# print the JSON string representation of the object
print(ReportSummary.to_json())

# convert the object into a dict
report_summary_dict = report_summary_instance.to_dict()
# create an instance of ReportSummary from a dict
report_summary_from_dict = ReportSummary.from_dict(report_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


