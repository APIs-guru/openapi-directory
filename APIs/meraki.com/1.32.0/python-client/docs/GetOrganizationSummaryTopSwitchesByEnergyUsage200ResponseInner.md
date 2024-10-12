# GetOrganizationSummaryTopSwitchesByEnergyUsage200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mac** | **str** | Mac address of the switch | [optional] 
**model** | **str** | Model of the switch | [optional] 
**name** | **str** | Name of the switch | [optional] 
**network** | [**GetOrganizationSummaryTopAppliancesByUtilization200ResponseInnerNetwork**](GetOrganizationSummaryTopAppliancesByUtilization200ResponseInnerNetwork.md) |  | [optional] 
**usage** | [**GetOrganizationSummaryTopSwitchesByEnergyUsage200ResponseInnerUsage**](GetOrganizationSummaryTopSwitchesByEnergyUsage200ResponseInnerUsage.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organization_summary_top_switches_by_energy_usage200_response_inner import GetOrganizationSummaryTopSwitchesByEnergyUsage200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSummaryTopSwitchesByEnergyUsage200ResponseInner from a JSON string
get_organization_summary_top_switches_by_energy_usage200_response_inner_instance = GetOrganizationSummaryTopSwitchesByEnergyUsage200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSummaryTopSwitchesByEnergyUsage200ResponseInner.to_json())

# convert the object into a dict
get_organization_summary_top_switches_by_energy_usage200_response_inner_dict = get_organization_summary_top_switches_by_energy_usage200_response_inner_instance.to_dict()
# create an instance of GetOrganizationSummaryTopSwitchesByEnergyUsage200ResponseInner from a dict
get_organization_summary_top_switches_by_energy_usage200_response_inner_from_dict = GetOrganizationSummaryTopSwitchesByEnergyUsage200ResponseInner.from_dict(get_organization_summary_top_switches_by_energy_usage200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


