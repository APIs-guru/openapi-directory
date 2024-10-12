# ReportSummaryVMWareNode

A VMWare Engine Node

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Code to identify VMware Engine node series, e.g. \&quot;ve1-standard-72\&quot;. Based on the displayName of cloud.google.com/vmware-engine/docs/reference/rest/v1/projects.locations.nodeTypes | [optional] 

## Example

```python
from openapi_client.models.report_summary_vm_ware_node import ReportSummaryVMWareNode

# TODO update the JSON string below
json = "{}"
# create an instance of ReportSummaryVMWareNode from a JSON string
report_summary_vm_ware_node_instance = ReportSummaryVMWareNode.from_json(json)
# print the JSON string representation of the object
print(ReportSummaryVMWareNode.to_json())

# convert the object into a dict
report_summary_vm_ware_node_dict = report_summary_vm_ware_node_instance.to_dict()
# create an instance of ReportSummaryVMWareNode from a dict
report_summary_vm_ware_node_from_dict = ReportSummaryVMWareNode.from_dict(report_summary_vm_ware_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


