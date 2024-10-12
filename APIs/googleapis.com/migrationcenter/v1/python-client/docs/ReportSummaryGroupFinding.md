# ReportSummaryGroupFinding

Summary Findings for a specific Group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_aggregate_stats** | [**ReportSummaryAssetAggregateStats**](ReportSummaryAssetAggregateStats.md) |  | [optional] 
**description** | **str** | Description for the Group. | [optional] 
**display_name** | **str** | Display Name for the Group. | [optional] 
**overlapping_asset_count** | **str** | This field is deprecated, do not rely on it having a value. | [optional] 
**preference_set_findings** | [**List[ReportSummaryGroupPreferenceSetFinding]**](ReportSummaryGroupPreferenceSetFinding.md) | Findings for each of the PreferenceSets for this group. | [optional] 

## Example

```python
from openapi_client.models.report_summary_group_finding import ReportSummaryGroupFinding

# TODO update the JSON string below
json = "{}"
# create an instance of ReportSummaryGroupFinding from a JSON string
report_summary_group_finding_instance = ReportSummaryGroupFinding.from_json(json)
# print the JSON string representation of the object
print(ReportSummaryGroupFinding.to_json())

# convert the object into a dict
report_summary_group_finding_dict = report_summary_group_finding_instance.to_dict()
# create an instance of ReportSummaryGroupFinding from a dict
report_summary_group_finding_from_dict = ReportSummaryGroupFinding.from_dict(report_summary_group_finding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


