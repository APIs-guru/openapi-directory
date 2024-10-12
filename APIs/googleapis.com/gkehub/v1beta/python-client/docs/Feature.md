# Feature

Feature represents the settings and status of any Hub Feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. When the Feature resource was created. | [optional] [readonly] 
**delete_time** | **str** | Output only. When the Feature resource was deleted. | [optional] [readonly] 
**fleet_default_member_config** | [**CommonFleetDefaultMemberConfigSpec**](CommonFleetDefaultMemberConfigSpec.md) |  | [optional] 
**labels** | **Dict[str, str]** | Labels for this Feature. | [optional] 
**membership_specs** | [**Dict[str, MembershipFeatureSpec]**](MembershipFeatureSpec.md) | Optional. Membership-specific configuration for this Feature. If this Feature does not support any per-Membership configuration, this field may be unused. The keys indicate which Membership the configuration is for, in the form: &#x60;projects/{p}/locations/{l}/memberships/{m}&#x60; Where {p} is the project, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} WILL match the Feature&#39;s project. {p} will always be returned as the project number, but the project ID is also accepted during input. If the same Membership is specified in the map twice (using the project ID form, and the project number form), exactly ONE of the entries will be saved, with no guarantees as to which. For this reason, it is recommended the same format be used for all entries when mutating a Feature. | [optional] 
**membership_states** | [**Dict[str, MembershipFeatureState]**](MembershipFeatureState.md) | Output only. Membership-specific Feature status. If this Feature does report any per-Membership status, this field may be unused. The keys indicate which Membership the state is for, in the form: &#x60;projects/{p}/locations/{l}/memberships/{m}&#x60; Where {p} is the project number, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} MUST match the Feature&#39;s project number. | [optional] [readonly] 
**name** | **str** | Output only. The full, unique name of this Feature resource in the format &#x60;projects/*/locations/*/features/*&#x60;. | [optional] [readonly] 
**resource_state** | [**FeatureResourceState**](FeatureResourceState.md) |  | [optional] 
**scope_specs** | **Dict[str, object]** | Optional. Scope-specific configuration for this Feature. If this Feature does not support any per-Scope configuration, this field may be unused. The keys indicate which Scope the configuration is for, in the form: &#x60;projects/{p}/locations/global/scopes/{s}&#x60; Where {p} is the project, {s} is a valid Scope in this project. {p} WILL match the Feature&#39;s project. {p} will always be returned as the project number, but the project ID is also accepted during input. If the same Scope is specified in the map twice (using the project ID form, and the project number form), exactly ONE of the entries will be saved, with no guarantees as to which. For this reason, it is recommended the same format be used for all entries when mutating a Feature. | [optional] 
**scope_states** | [**Dict[str, ScopeFeatureState]**](ScopeFeatureState.md) | Output only. Scope-specific Feature status. If this Feature does report any per-Scope status, this field may be unused. The keys indicate which Scope the state is for, in the form: &#x60;projects/{p}/locations/global/scopes/{s}&#x60; Where {p} is the project, {s} is a valid Scope in this project. {p} WILL match the Feature&#39;s project. | [optional] [readonly] 
**spec** | [**CommonFeatureSpec**](CommonFeatureSpec.md) |  | [optional] 
**state** | [**CommonFeatureState**](CommonFeatureState.md) |  | [optional] 
**update_time** | **str** | Output only. When the Feature resource was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.feature import Feature

# TODO update the JSON string below
json = "{}"
# create an instance of Feature from a JSON string
feature_instance = Feature.from_json(json)
# print the JSON string representation of the object
print(Feature.to_json())

# convert the object into a dict
feature_dict = feature_instance.to_dict()
# create an instance of Feature from a dict
feature_from_dict = Feature.from_dict(feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


