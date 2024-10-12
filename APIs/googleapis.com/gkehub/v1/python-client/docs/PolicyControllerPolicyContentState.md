# PolicyControllerPolicyContentState

The state of the policy controller policy content

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_states** | [**Dict[str, PolicyControllerOnClusterState]**](PolicyControllerOnClusterState.md) | The state of the any bundles included in the chosen version of the manifest | [optional] 
**referential_sync_config_state** | [**PolicyControllerOnClusterState**](PolicyControllerOnClusterState.md) |  | [optional] 
**template_library_state** | [**PolicyControllerOnClusterState**](PolicyControllerOnClusterState.md) |  | [optional] 

## Example

```python
from openapi_client.models.policy_controller_policy_content_state import PolicyControllerPolicyContentState

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyControllerPolicyContentState from a JSON string
policy_controller_policy_content_state_instance = PolicyControllerPolicyContentState.from_json(json)
# print the JSON string representation of the object
print(PolicyControllerPolicyContentState.to_json())

# convert the object into a dict
policy_controller_policy_content_state_dict = policy_controller_policy_content_state_instance.to_dict()
# create an instance of PolicyControllerPolicyContentState from a dict
policy_controller_policy_content_state_from_dict = PolicyControllerPolicyContentState.from_dict(policy_controller_policy_content_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


