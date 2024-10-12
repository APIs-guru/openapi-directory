# SoleTenancyPreferences

Preferences concerning Sole Tenancy nodes and VMs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commitment_plan** | **str** | Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. | [optional] 
**cpu_overcommit_ratio** | **float** | CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive. | [optional] 
**host_maintenance_policy** | **str** | Sole Tenancy nodes maintenance policy. | [optional] 
**node_types** | [**List[SoleTenantNodeType]**](SoleTenantNodeType.md) | A list of sole tenant node types. An empty list means that all possible node types will be considered. | [optional] 

## Example

```python
from openapi_client.models.sole_tenancy_preferences import SoleTenancyPreferences

# TODO update the JSON string below
json = "{}"
# create an instance of SoleTenancyPreferences from a JSON string
sole_tenancy_preferences_instance = SoleTenancyPreferences.from_json(json)
# print the JSON string representation of the object
print(SoleTenancyPreferences.to_json())

# convert the object into a dict
sole_tenancy_preferences_dict = sole_tenancy_preferences_instance.to_dict()
# create an instance of SoleTenancyPreferences from a dict
sole_tenancy_preferences_from_dict = SoleTenancyPreferences.from_dict(sole_tenancy_preferences_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


