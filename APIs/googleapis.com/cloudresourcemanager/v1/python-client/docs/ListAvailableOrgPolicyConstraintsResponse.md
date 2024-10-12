# ListAvailableOrgPolicyConstraintsResponse

The response returned from the `ListAvailableOrgPolicyConstraints` method. Returns all `Constraints` that could be set at this level of the hierarchy (contrast with the response from `ListPolicies`, which returns all policies which are set).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constraints** | [**List[Constraint]**](Constraint.md) | The collection of constraints that are settable on the request resource. | [optional] 
**next_page_token** | **str** | Page token used to retrieve the next page. This is currently not used. | [optional] 

## Example

```python
from openapi_client.models.list_available_org_policy_constraints_response import ListAvailableOrgPolicyConstraintsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAvailableOrgPolicyConstraintsResponse from a JSON string
list_available_org_policy_constraints_response_instance = ListAvailableOrgPolicyConstraintsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAvailableOrgPolicyConstraintsResponse.to_json())

# convert the object into a dict
list_available_org_policy_constraints_response_dict = list_available_org_policy_constraints_response_instance.to_dict()
# create an instance of ListAvailableOrgPolicyConstraintsResponse from a dict
list_available_org_policy_constraints_response_from_dict = ListAvailableOrgPolicyConstraintsResponse.from_dict(list_available_org_policy_constraints_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


