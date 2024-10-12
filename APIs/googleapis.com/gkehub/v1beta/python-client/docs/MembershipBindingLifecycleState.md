# MembershipBindingLifecycleState

MembershipBindingLifecycleState describes the state of a Binding resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Output only. The current state of the MembershipBinding resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.membership_binding_lifecycle_state import MembershipBindingLifecycleState

# TODO update the JSON string below
json = "{}"
# create an instance of MembershipBindingLifecycleState from a JSON string
membership_binding_lifecycle_state_instance = MembershipBindingLifecycleState.from_json(json)
# print the JSON string representation of the object
print(MembershipBindingLifecycleState.to_json())

# convert the object into a dict
membership_binding_lifecycle_state_dict = membership_binding_lifecycle_state_instance.to_dict()
# create an instance of MembershipBindingLifecycleState from a dict
membership_binding_lifecycle_state_from_dict = MembershipBindingLifecycleState.from_dict(membership_binding_lifecycle_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


