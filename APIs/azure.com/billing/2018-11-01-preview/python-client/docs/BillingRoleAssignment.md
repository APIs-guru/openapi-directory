# BillingRoleAssignment

a role assignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BillingRoleAssignmentProperties**](BillingRoleAssignmentProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.billing_role_assignment import BillingRoleAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of BillingRoleAssignment from a JSON string
billing_role_assignment_instance = BillingRoleAssignment.from_json(json)
# print the JSON string representation of the object
print(BillingRoleAssignment.to_json())

# convert the object into a dict
billing_role_assignment_dict = billing_role_assignment_instance.to_dict()
# create an instance of BillingRoleAssignment from a dict
billing_role_assignment_from_dict = BillingRoleAssignment.from_dict(billing_role_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


