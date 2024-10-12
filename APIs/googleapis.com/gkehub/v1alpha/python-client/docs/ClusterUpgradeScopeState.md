# ClusterUpgradeScopeState

**ClusterUpgrade**: The state for the scope-level ClusterUpgrade feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**downstream_scopes** | **List[str]** | This scopes whose upstream_scopes contain the current scope. The scope name should be in the form: &#x60;projects/{p}/locations/gloobal/scopes/{s}&#x60; Where {p} is the project, {s} is a valid Scope in this project. {p} WILL match the Feature&#39;s project. | [optional] 
**gke_state** | [**ClusterUpgradeGKEUpgradeFeatureState**](ClusterUpgradeGKEUpgradeFeatureState.md) |  | [optional] 
**ignored** | [**Dict[str, ClusterUpgradeIgnoredMembership]**](ClusterUpgradeIgnoredMembership.md) | A list of memberships ignored by the feature. For example, manually upgraded clusters can be ignored if they are newer than the default versions of its release channel. The membership resource is in the format: &#x60;projects/{p}/locations/{l}/membership/{m}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.cluster_upgrade_scope_state import ClusterUpgradeScopeState

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeScopeState from a JSON string
cluster_upgrade_scope_state_instance = ClusterUpgradeScopeState.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeScopeState.to_json())

# convert the object into a dict
cluster_upgrade_scope_state_dict = cluster_upgrade_scope_state_instance.to_dict()
# create an instance of ClusterUpgradeScopeState from a dict
cluster_upgrade_scope_state_from_dict = ClusterUpgradeScopeState.from_dict(cluster_upgrade_scope_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


