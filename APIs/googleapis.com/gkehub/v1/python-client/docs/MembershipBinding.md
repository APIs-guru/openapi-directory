# MembershipBinding

MembershipBinding is a subresource of a Membership, representing what Fleet Scopes (or other, future Fleet resources) a Membership is bound to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. When the membership binding was created. | [optional] [readonly] 
**delete_time** | **str** | Output only. When the membership binding was deleted. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Optional. Labels for this MembershipBinding. | [optional] 
**name** | **str** | The resource name for the membershipbinding itself &#x60;projects/{project}/locations/{location}/memberships/{membership}/bindings/{membershipbinding}&#x60; | [optional] 
**scope** | **str** | A Scope resource name in the format &#x60;projects/*/locations/*/scopes/*&#x60;. | [optional] 
**state** | [**MembershipBindingLifecycleState**](MembershipBindingLifecycleState.md) |  | [optional] 
**uid** | **str** | Output only. Google-generated UUID for this resource. This is unique across all membershipbinding resources. If a membershipbinding resource is deleted and another resource with the same name is created, it gets a different uid. | [optional] [readonly] 
**update_time** | **str** | Output only. When the membership binding was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.membership_binding import MembershipBinding

# TODO update the JSON string below
json = "{}"
# create an instance of MembershipBinding from a JSON string
membership_binding_instance = MembershipBinding.from_json(json)
# print the JSON string representation of the object
print(MembershipBinding.to_json())

# convert the object into a dict
membership_binding_dict = membership_binding_instance.to_dict()
# create an instance of MembershipBinding from a dict
membership_binding_from_dict = MembershipBinding.from_dict(membership_binding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


