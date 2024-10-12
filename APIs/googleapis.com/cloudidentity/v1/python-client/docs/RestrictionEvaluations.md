# RestrictionEvaluations

Evaluations of restrictions applied to parent group on this membership.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**member_restriction_evaluation** | [**MembershipRoleRestrictionEvaluation**](MembershipRoleRestrictionEvaluation.md) |  | [optional] 

## Example

```python
from openapi_client.models.restriction_evaluations import RestrictionEvaluations

# TODO update the JSON string below
json = "{}"
# create an instance of RestrictionEvaluations from a JSON string
restriction_evaluations_instance = RestrictionEvaluations.from_json(json)
# print the JSON string representation of the object
print(RestrictionEvaluations.to_json())

# convert the object into a dict
restriction_evaluations_dict = restriction_evaluations_instance.to_dict()
# create an instance of RestrictionEvaluations from a dict
restriction_evaluations_from_dict = RestrictionEvaluations.from_dict(restriction_evaluations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


