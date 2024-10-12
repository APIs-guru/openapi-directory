# ReportSummaryGroupPreferenceSetFinding

Summary Findings for a specific Group/PreferenceSet combination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description for the Preference Set. | [optional] 
**display_name** | **str** | Display Name of the Preference Set | [optional] 
**machine_finding** | [**ReportSummaryMachineFinding**](ReportSummaryMachineFinding.md) |  | [optional] 
**machine_preferences** | [**VirtualMachinePreferences**](VirtualMachinePreferences.md) |  | [optional] 
**monthly_cost_compute** | [**Money**](Money.md) |  | [optional] 
**monthly_cost_network_egress** | [**Money**](Money.md) |  | [optional] 
**monthly_cost_os_license** | [**Money**](Money.md) |  | [optional] 
**monthly_cost_other** | [**Money**](Money.md) |  | [optional] 
**monthly_cost_storage** | [**Money**](Money.md) |  | [optional] 
**monthly_cost_total** | [**Money**](Money.md) |  | [optional] 
**preferred_region** | **str** | Target region for this Preference Set | [optional] 
**pricing_track** | **str** | Text describing the pricing track specified for this Preference Set | [optional] 
**sole_tenant_finding** | [**ReportSummarySoleTenantFinding**](ReportSummarySoleTenantFinding.md) |  | [optional] 
**top_priority** | **str** | Text describing the business priority specified for this Preference Set | [optional] 
**vmware_engine_finding** | [**ReportSummaryVMWareEngineFinding**](ReportSummaryVMWareEngineFinding.md) |  | [optional] 

## Example

```python
from openapi_client.models.report_summary_group_preference_set_finding import ReportSummaryGroupPreferenceSetFinding

# TODO update the JSON string below
json = "{}"
# create an instance of ReportSummaryGroupPreferenceSetFinding from a JSON string
report_summary_group_preference_set_finding_instance = ReportSummaryGroupPreferenceSetFinding.from_json(json)
# print the JSON string representation of the object
print(ReportSummaryGroupPreferenceSetFinding.to_json())

# convert the object into a dict
report_summary_group_preference_set_finding_dict = report_summary_group_preference_set_finding_instance.to_dict()
# create an instance of ReportSummaryGroupPreferenceSetFinding from a dict
report_summary_group_preference_set_finding_from_dict = ReportSummaryGroupPreferenceSetFinding.from_dict(report_summary_group_preference_set_finding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


