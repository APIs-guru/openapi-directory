# IdentityServiceMembershipState

**Anthos Identity Service**: State for a single Membership.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure_reason** | **str** | The reason of the failure. | [optional] 
**installed_version** | **str** | Installed AIS version. This is the AIS version installed on this member. The values makes sense iff state is OK. | [optional] 
**member_config** | [**IdentityServiceMembershipSpec**](IdentityServiceMembershipSpec.md) |  | [optional] 
**state** | **str** | Deployment state on this member | [optional] 

## Example

```python
from openapi_client.models.identity_service_membership_state import IdentityServiceMembershipState

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityServiceMembershipState from a JSON string
identity_service_membership_state_instance = IdentityServiceMembershipState.from_json(json)
# print the JSON string representation of the object
print(IdentityServiceMembershipState.to_json())

# convert the object into a dict
identity_service_membership_state_dict = identity_service_membership_state_instance.to_dict()
# create an instance of IdentityServiceMembershipState from a dict
identity_service_membership_state_from_dict = IdentityServiceMembershipState.from_dict(identity_service_membership_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


