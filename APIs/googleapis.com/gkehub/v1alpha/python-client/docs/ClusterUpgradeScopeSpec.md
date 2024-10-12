# ClusterUpgradeScopeSpec

**ClusterUpgrade**: The configuration for the scope-level ClusterUpgrade feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gke_upgrade_overrides** | [**List[ClusterUpgradeGKEUpgradeOverride]**](ClusterUpgradeGKEUpgradeOverride.md) | Allow users to override some properties of each GKE upgrade. | [optional] 
**post_conditions** | [**ClusterUpgradePostConditions**](ClusterUpgradePostConditions.md) |  | [optional] 
**upstream_scopes** | **List[str]** | This scope consumes upgrades that have COMPLETE status code in the upstream scopes. See UpgradeStatus.Code for code definitions. The scope name should be in the form: &#x60;projects/{p}/locations/global/scopes/{s}&#x60; Where {p} is the project, {s} is a valid Scope in this project. {p} WILL match the Feature&#39;s project. This is defined as repeated for future proof reasons. Initial implementation will enforce at most one upstream scope. | [optional] 

## Example

```python
from openapi_client.models.cluster_upgrade_scope_spec import ClusterUpgradeScopeSpec

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeScopeSpec from a JSON string
cluster_upgrade_scope_spec_instance = ClusterUpgradeScopeSpec.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeScopeSpec.to_json())

# convert the object into a dict
cluster_upgrade_scope_spec_dict = cluster_upgrade_scope_spec_instance.to_dict()
# create an instance of ClusterUpgradeScopeSpec from a dict
cluster_upgrade_scope_spec_from_dict = ClusterUpgradeScopeSpec.from_dict(cluster_upgrade_scope_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


