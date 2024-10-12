# ReportSummarySoleTenantNodeAllocation

Represents the assets allocated to a specific Sole-Tenant node type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocated_asset_count** | **str** | Count of assets allocated to these nodes | [optional] 
**node** | [**SoleTenantNodeType**](SoleTenantNodeType.md) |  | [optional] 
**node_count** | **str** | Count of this node type to be provisioned | [optional] 

## Example

```python
from openapi_client.models.report_summary_sole_tenant_node_allocation import ReportSummarySoleTenantNodeAllocation

# TODO update the JSON string below
json = "{}"
# create an instance of ReportSummarySoleTenantNodeAllocation from a JSON string
report_summary_sole_tenant_node_allocation_instance = ReportSummarySoleTenantNodeAllocation.from_json(json)
# print the JSON string representation of the object
print(ReportSummarySoleTenantNodeAllocation.to_json())

# convert the object into a dict
report_summary_sole_tenant_node_allocation_dict = report_summary_sole_tenant_node_allocation_instance.to_dict()
# create an instance of ReportSummarySoleTenantNodeAllocation from a dict
report_summary_sole_tenant_node_allocation_from_dict = ReportSummarySoleTenantNodeAllocation.from_dict(report_summary_sole_tenant_node_allocation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


