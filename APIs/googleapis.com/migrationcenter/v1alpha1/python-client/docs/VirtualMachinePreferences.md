# VirtualMachinePreferences

VirtualMachinePreferences enables you to create sets of preferences, for example, a geographical location and pricing track, for your migrated virtual machines. The set of preferences influence recommendations for migrating virtual machine assets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commitment_plan** | **str** | Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. | [optional] 
**compute_engine_preferences** | [**ComputeEnginePreferences**](ComputeEnginePreferences.md) |  | [optional] 
**network_cost_parameters** | [**VirtualMachinePreferencesNetworkCostParameters**](VirtualMachinePreferencesNetworkCostParameters.md) |  | [optional] 
**region_preferences** | [**RegionPreferences**](RegionPreferences.md) |  | [optional] 
**sizing_optimization_custom_parameters** | [**VirtualMachinePreferencesSizingOptimizationCustomParameters**](VirtualMachinePreferencesSizingOptimizationCustomParameters.md) |  | [optional] 
**sizing_optimization_strategy** | **str** | Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with. | [optional] 
**sole_tenancy_preferences** | [**SoleTenancyPreferences**](SoleTenancyPreferences.md) |  | [optional] 
**target_product** | **str** | Target product for assets using this preference set. Specify either target product or business goal, but not both. | [optional] 
**vmware_engine_preferences** | [**VmwareEnginePreferences**](VmwareEnginePreferences.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_preferences import VirtualMachinePreferences

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachinePreferences from a JSON string
virtual_machine_preferences_instance = VirtualMachinePreferences.from_json(json)
# print the JSON string representation of the object
print(VirtualMachinePreferences.to_json())

# convert the object into a dict
virtual_machine_preferences_dict = virtual_machine_preferences_instance.to_dict()
# create an instance of VirtualMachinePreferences from a dict
virtual_machine_preferences_from_dict = VirtualMachinePreferences.from_dict(virtual_machine_preferences_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


