# MembershipFeatureState

MembershipFeatureState contains Feature status information for a single Membership.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appdevexperience** | [**AppDevExperienceFeatureState**](AppDevExperienceFeatureState.md) |  | [optional] 
**clusterupgrade** | [**ClusterUpgradeMembershipState**](ClusterUpgradeMembershipState.md) |  | [optional] 
**configmanagement** | [**ConfigManagementMembershipState**](ConfigManagementMembershipState.md) |  | [optional] 
**fleetobservability** | **object** | **FleetObservability**: Membership-specific Feature state for fleetobservability. | [optional] 
**identityservice** | [**IdentityServiceMembershipState**](IdentityServiceMembershipState.md) |  | [optional] 
**metering** | [**MeteringMembershipState**](MeteringMembershipState.md) |  | [optional] 
**namespaceactuation** | **object** | **Namespace Actuation**: An empty state left as an example membership-specific Feature state. | [optional] 
**policycontroller** | [**PolicyControllerMembershipState**](PolicyControllerMembershipState.md) |  | [optional] 
**servicemesh** | [**ServiceMeshMembershipState**](ServiceMeshMembershipState.md) |  | [optional] 
**state** | [**FeatureState**](FeatureState.md) |  | [optional] 

## Example

```python
from openapi_client.models.membership_feature_state import MembershipFeatureState

# TODO update the JSON string below
json = "{}"
# create an instance of MembershipFeatureState from a JSON string
membership_feature_state_instance = MembershipFeatureState.from_json(json)
# print the JSON string representation of the object
print(MembershipFeatureState.to_json())

# convert the object into a dict
membership_feature_state_dict = membership_feature_state_instance.to_dict()
# create an instance of MembershipFeatureState from a dict
membership_feature_state_from_dict = MembershipFeatureState.from_dict(membership_feature_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


