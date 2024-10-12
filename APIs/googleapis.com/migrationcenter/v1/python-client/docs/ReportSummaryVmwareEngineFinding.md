# ReportSummaryVmwareEngineFinding

A set of findings that applies to assets destined for VMWare Engine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocated_asset_count** | **str** | Count of assets which are allocated | [optional] 
**allocated_regions** | **List[str]** | Set of regions in which the assets were allocated | [optional] 
**node_allocations** | [**List[ReportSummaryVmwareNodeAllocation]**](ReportSummaryVmwareNodeAllocation.md) | Set of per-nodetype allocation records | [optional] 

## Example

```python
from openapi_client.models.report_summary_vmware_engine_finding import ReportSummaryVmwareEngineFinding

# TODO update the JSON string below
json = "{}"
# create an instance of ReportSummaryVmwareEngineFinding from a JSON string
report_summary_vmware_engine_finding_instance = ReportSummaryVmwareEngineFinding.from_json(json)
# print the JSON string representation of the object
print(ReportSummaryVmwareEngineFinding.to_json())

# convert the object into a dict
report_summary_vmware_engine_finding_dict = report_summary_vmware_engine_finding_instance.to_dict()
# create an instance of ReportSummaryVmwareEngineFinding from a dict
report_summary_vmware_engine_finding_from_dict = ReportSummaryVmwareEngineFinding.from_dict(report_summary_vmware_engine_finding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


