# PolicyControllerMembershipSpec

**Policy Controller**: Configuration for a single cluster. Intended to parallel the PolicyController CR.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_controller_hub_config** | [**PolicyControllerHubConfig**](PolicyControllerHubConfig.md) |  | [optional] 
**version** | **str** | Version of Policy Controller installed. | [optional] 

## Example

```python
from openapi_client.models.policy_controller_membership_spec import PolicyControllerMembershipSpec

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyControllerMembershipSpec from a JSON string
policy_controller_membership_spec_instance = PolicyControllerMembershipSpec.from_json(json)
# print the JSON string representation of the object
print(PolicyControllerMembershipSpec.to_json())

# convert the object into a dict
policy_controller_membership_spec_dict = policy_controller_membership_spec_instance.to_dict()
# create an instance of PolicyControllerMembershipSpec from a dict
policy_controller_membership_spec_from_dict = PolicyControllerMembershipSpec.from_dict(policy_controller_membership_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


