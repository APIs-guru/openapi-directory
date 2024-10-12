# PolicyControllerOnClusterState

OnClusterState represents the state of a sub-component of Policy Controller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** | Surface potential errors or information logs. | [optional] 
**state** | **str** | The lifecycle state of this component. | [optional] 

## Example

```python
from openapi_client.models.policy_controller_on_cluster_state import PolicyControllerOnClusterState

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyControllerOnClusterState from a JSON string
policy_controller_on_cluster_state_instance = PolicyControllerOnClusterState.from_json(json)
# print the JSON string representation of the object
print(PolicyControllerOnClusterState.to_json())

# convert the object into a dict
policy_controller_on_cluster_state_dict = policy_controller_on_cluster_state_instance.to_dict()
# create an instance of PolicyControllerOnClusterState from a dict
policy_controller_on_cluster_state_from_dict = PolicyControllerOnClusterState.from_dict(policy_controller_on_cluster_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


