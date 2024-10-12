# ReportSummarySoleTenantFinding

A set of findings that applies to assets destined for Sole-Tenant nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocated_asset_count** | **str** | Count of assets which are allocated | [optional] 
**allocated_regions** | **List[str]** | Set of regions in which the assets are allocated | [optional] 
**node_allocations** | [**List[ReportSummarySoleTenantNodeAllocation]**](ReportSummarySoleTenantNodeAllocation.md) | Set of per-nodetype allocation records | [optional] 

## Example

```python
from openapi_client.models.report_summary_sole_tenant_finding import ReportSummarySoleTenantFinding

# TODO update the JSON string below
json = "{}"
# create an instance of ReportSummarySoleTenantFinding from a JSON string
report_summary_sole_tenant_finding_instance = ReportSummarySoleTenantFinding.from_json(json)
# print the JSON string representation of the object
print(ReportSummarySoleTenantFinding.to_json())

# convert the object into a dict
report_summary_sole_tenant_finding_dict = report_summary_sole_tenant_finding_instance.to_dict()
# create an instance of ReportSummarySoleTenantFinding from a dict
report_summary_sole_tenant_finding_from_dict = ReportSummarySoleTenantFinding.from_dict(report_summary_sole_tenant_finding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


