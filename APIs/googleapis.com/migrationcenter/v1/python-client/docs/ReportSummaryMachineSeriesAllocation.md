# ReportSummaryMachineSeriesAllocation

Represents a data point tracking the count of assets allocated for a specific Machine Series.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocated_asset_count** | **str** | Count of assets allocated to this machine series. | [optional] 
**machine_series** | [**MachineSeries**](MachineSeries.md) |  | [optional] 

## Example

```python
from openapi_client.models.report_summary_machine_series_allocation import ReportSummaryMachineSeriesAllocation

# TODO update the JSON string below
json = "{}"
# create an instance of ReportSummaryMachineSeriesAllocation from a JSON string
report_summary_machine_series_allocation_instance = ReportSummaryMachineSeriesAllocation.from_json(json)
# print the JSON string representation of the object
print(ReportSummaryMachineSeriesAllocation.to_json())

# convert the object into a dict
report_summary_machine_series_allocation_dict = report_summary_machine_series_allocation_instance.to_dict()
# create an instance of ReportSummaryMachineSeriesAllocation from a dict
report_summary_machine_series_allocation_from_dict = ReportSummaryMachineSeriesAllocation.from_dict(report_summary_machine_series_allocation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


