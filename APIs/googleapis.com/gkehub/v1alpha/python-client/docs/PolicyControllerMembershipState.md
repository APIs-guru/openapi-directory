# PolicyControllerMembershipState

**Policy Controller**: State for a single cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_states** | [**Dict[str, PolicyControllerOnClusterState]**](PolicyControllerOnClusterState.md) | Currently these include (also serving as map keys): 1. \&quot;admission\&quot; 2. \&quot;audit\&quot; 3. \&quot;mutation\&quot; | [optional] 
**policy_content_state** | [**PolicyControllerPolicyContentState**](PolicyControllerPolicyContentState.md) |  | [optional] 
**state** | **str** | The overall Policy Controller lifecycle state observed by the Hub Feature controller. | [optional] 

## Example

```python
from openapi_client.models.policy_controller_membership_state import PolicyControllerMembershipState

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyControllerMembershipState from a JSON string
policy_controller_membership_state_instance = PolicyControllerMembershipState.from_json(json)
# print the JSON string representation of the object
print(PolicyControllerMembershipState.to_json())

# convert the object into a dict
policy_controller_membership_state_dict = policy_controller_membership_state_instance.to_dict()
# create an instance of PolicyControllerMembershipState from a dict
policy_controller_membership_state_from_dict = PolicyControllerMembershipState.from_dict(policy_controller_membership_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


