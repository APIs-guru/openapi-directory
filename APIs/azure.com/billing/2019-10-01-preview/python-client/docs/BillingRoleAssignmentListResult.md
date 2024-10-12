# BillingRoleAssignmentListResult

Result of get list of role assignments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[BillingRoleAssignment]**](BillingRoleAssignment.md) | The list role assignments | [optional] [readonly] 

## Example

```python
from openapi_client.models.billing_role_assignment_list_result import BillingRoleAssignmentListResult

# TODO update the JSON string below
json = "{}"
# create an instance of BillingRoleAssignmentListResult from a JSON string
billing_role_assignment_list_result_instance = BillingRoleAssignmentListResult.from_json(json)
# print the JSON string representation of the object
print(BillingRoleAssignmentListResult.to_json())

# convert the object into a dict
billing_role_assignment_list_result_dict = billing_role_assignment_list_result_instance.to_dict()
# create an instance of BillingRoleAssignmentListResult from a dict
billing_role_assignment_list_result_from_dict = BillingRoleAssignmentListResult.from_dict(billing_role_assignment_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


