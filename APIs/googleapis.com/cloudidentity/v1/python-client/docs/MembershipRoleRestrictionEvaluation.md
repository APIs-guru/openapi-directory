# MembershipRoleRestrictionEvaluation

The evaluated state of this restriction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | Output only. The current state of the restriction | [optional] [readonly] 

## Example

```python
from openapi_client.models.membership_role_restriction_evaluation import MembershipRoleRestrictionEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of MembershipRoleRestrictionEvaluation from a JSON string
membership_role_restriction_evaluation_instance = MembershipRoleRestrictionEvaluation.from_json(json)
# print the JSON string representation of the object
print(MembershipRoleRestrictionEvaluation.to_json())

# convert the object into a dict
membership_role_restriction_evaluation_dict = membership_role_restriction_evaluation_instance.to_dict()
# create an instance of MembershipRoleRestrictionEvaluation from a dict
membership_role_restriction_evaluation_from_dict = MembershipRoleRestrictionEvaluation.from_dict(membership_role_restriction_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


