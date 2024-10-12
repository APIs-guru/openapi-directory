# ReportSummaryAssetAggregateStats

Aggregate statistics for a collection of assets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_age** | [**ReportSummaryChartData**](ReportSummaryChartData.md) |  | [optional] 
**core_count_histogram** | [**ReportSummaryHistogramChartData**](ReportSummaryHistogramChartData.md) |  | [optional] 
**memory_bytes_histogram** | [**ReportSummaryHistogramChartData**](ReportSummaryHistogramChartData.md) |  | [optional] 
**memory_utilization** | [**ReportSummaryChartData**](ReportSummaryChartData.md) |  | [optional] 
**memory_utilization_chart** | [**ReportSummaryUtilizationChartData**](ReportSummaryUtilizationChartData.md) |  | [optional] 
**operating_system** | [**ReportSummaryChartData**](ReportSummaryChartData.md) |  | [optional] 
**storage_bytes_histogram** | [**ReportSummaryHistogramChartData**](ReportSummaryHistogramChartData.md) |  | [optional] 
**storage_utilization** | [**ReportSummaryChartData**](ReportSummaryChartData.md) |  | [optional] 
**storage_utilization_chart** | [**ReportSummaryUtilizationChartData**](ReportSummaryUtilizationChartData.md) |  | [optional] 
**total_assets** | **str** | Count of the number of unique assets in this collection. | [optional] 
**total_cores** | **str** | Sum of the CPU core count of all the assets in this collection. | [optional] 
**total_memory_bytes** | **str** | Sum of the memory in bytes of all the assets in this collection. | [optional] 
**total_storage_bytes** | **str** | Sum of persistent storage in bytes of all the assets in this collection. | [optional] 

## Example

```python
from openapi_client.models.report_summary_asset_aggregate_stats import ReportSummaryAssetAggregateStats

# TODO update the JSON string below
json = "{}"
# create an instance of ReportSummaryAssetAggregateStats from a JSON string
report_summary_asset_aggregate_stats_instance = ReportSummaryAssetAggregateStats.from_json(json)
# print the JSON string representation of the object
print(ReportSummaryAssetAggregateStats.to_json())

# convert the object into a dict
report_summary_asset_aggregate_stats_dict = report_summary_asset_aggregate_stats_instance.to_dict()
# create an instance of ReportSummaryAssetAggregateStats from a dict
report_summary_asset_aggregate_stats_from_dict = ReportSummaryAssetAggregateStats.from_dict(report_summary_asset_aggregate_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


