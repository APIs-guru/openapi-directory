# ReportSummaryMachineFinding

A set of findings that applies to assets of type Virtual/Physical Machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocated_asset_count** | **str** | Count of assets which were allocated. | [optional] 
**allocated_disk_types** | **List[str]** | Set of disk types allocated to assets. | [optional] 
**allocated_regions** | **List[str]** | Set of regions in which the assets were allocated. | [optional] 
**machine_series_allocations** | [**List[ReportSummaryMachineSeriesAllocation]**](ReportSummaryMachineSeriesAllocation.md) | Distribution of assets based on the Machine Series. | [optional] 

## Example

```python
from openapi_client.models.report_summary_machine_finding import ReportSummaryMachineFinding

# TODO update the JSON string below
json = "{}"
# create an instance of ReportSummaryMachineFinding from a JSON string
report_summary_machine_finding_instance = ReportSummaryMachineFinding.from_json(json)
# print the JSON string representation of the object
print(ReportSummaryMachineFinding.to_json())

# convert the object into a dict
report_summary_machine_finding_dict = report_summary_machine_finding_instance.to_dict()
# create an instance of ReportSummaryMachineFinding from a dict
report_summary_machine_finding_from_dict = ReportSummaryMachineFinding.from_dict(report_summary_machine_finding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


