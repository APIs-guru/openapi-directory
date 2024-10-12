# ConfigManagementMembershipState

**Anthos Config Management**: State for a single cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binauthz_state** | [**ConfigManagementBinauthzState**](ConfigManagementBinauthzState.md) |  | [optional] 
**cluster_name** | **str** | This field is set to the &#x60;cluster_name&#x60; field of the Membership Spec if it is not empty. Otherwise, it is set to the cluster&#39;s fleet membership name. | [optional] 
**config_sync_state** | [**ConfigManagementConfigSyncState**](ConfigManagementConfigSyncState.md) |  | [optional] 
**hierarchy_controller_state** | [**ConfigManagementHierarchyControllerState**](ConfigManagementHierarchyControllerState.md) |  | [optional] 
**membership_spec** | [**ConfigManagementMembershipSpec**](ConfigManagementMembershipSpec.md) |  | [optional] 
**operator_state** | [**ConfigManagementOperatorState**](ConfigManagementOperatorState.md) |  | [optional] 
**policy_controller_state** | [**ConfigManagementPolicyControllerState**](ConfigManagementPolicyControllerState.md) |  | [optional] 

## Example

```python
from openapi_client.models.config_management_membership_state import ConfigManagementMembershipState

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementMembershipState from a JSON string
config_management_membership_state_instance = ConfigManagementMembershipState.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementMembershipState.to_json())

# convert the object into a dict
config_management_membership_state_dict = config_management_membership_state_instance.to_dict()
# create an instance of ConfigManagementMembershipState from a dict
config_management_membership_state_from_dict = ConfigManagementMembershipState.from_dict(config_management_membership_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


