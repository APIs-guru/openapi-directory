# MembershipFeatureSpec

MembershipFeatureSpec contains configuration information for a single Membership. NOTE: Please use snake case in your feature name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configmanagement** | [**ConfigManagementMembershipSpec**](ConfigManagementMembershipSpec.md) |  | [optional] 
**fleetobservability** | **object** | **FleetObservability**: The membership-specific input for FleetObservability feature. | [optional] 
**identityservice** | [**IdentityServiceMembershipSpec**](IdentityServiceMembershipSpec.md) |  | [optional] 
**mesh** | [**ServiceMeshMembershipSpec**](ServiceMeshMembershipSpec.md) |  | [optional] 
**origin** | [**Origin**](Origin.md) |  | [optional] 
**policycontroller** | [**PolicyControllerMembershipSpec**](PolicyControllerMembershipSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.membership_feature_spec import MembershipFeatureSpec

# TODO update the JSON string below
json = "{}"
# create an instance of MembershipFeatureSpec from a JSON string
membership_feature_spec_instance = MembershipFeatureSpec.from_json(json)
# print the JSON string representation of the object
print(MembershipFeatureSpec.to_json())

# convert the object into a dict
membership_feature_spec_dict = membership_feature_spec_instance.to_dict()
# create an instance of MembershipFeatureSpec from a dict
membership_feature_spec_from_dict = MembershipFeatureSpec.from_dict(membership_feature_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


