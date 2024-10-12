# ReportSummaryVmwareNodeAllocation

Represents assets allocated to a specific VMWare Node type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocated_asset_count** | **str** | Count of assets allocated to these nodes | [optional] 
**node_count** | **str** | Count of this node type to be provisioned | [optional] 
**vmware_node** | [**ReportSummaryVmwareNode**](ReportSummaryVmwareNode.md) |  | [optional] 

## Example

```python
from openapi_client.models.report_summary_vmware_node_allocation import ReportSummaryVmwareNodeAllocation

# TODO update the JSON string below
json = "{}"
# create an instance of ReportSummaryVmwareNodeAllocation from a JSON string
report_summary_vmware_node_allocation_instance = ReportSummaryVmwareNodeAllocation.from_json(json)
# print the JSON string representation of the object
print(ReportSummaryVmwareNodeAllocation.to_json())

# convert the object into a dict
report_summary_vmware_node_allocation_dict = report_summary_vmware_node_allocation_instance.to_dict()
# create an instance of ReportSummaryVmwareNodeAllocation from a dict
report_summary_vmware_node_allocation_from_dict = ReportSummaryVmwareNodeAllocation.from_dict(report_summary_vmware_node_allocation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


