# BillingRoleAssignmentProperties

The properties of the a role assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by_principal_id** | **str** | the creator&#39;s principal Id | [optional] [readonly] 
**created_by_principal_tenant_id** | **str** | the creator&#39;s tenant Id | [optional] [readonly] 
**created_on** | **str** | the date the role assignment is created | [optional] [readonly] 
**name** | **str** | the name of the role assignment | [optional] [readonly] 
**principal_id** | **str** | The user&#39;s principal id that the role gets assigned to | [optional] [readonly] 
**role_definition_name** | **str** | The role definition id | [optional] [readonly] 
**scope** | **str** | The scope the role get assigned to | [optional] [readonly] 

## Example

```python
from openapi_client.models.billing_role_assignment_properties import BillingRoleAssignmentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BillingRoleAssignmentProperties from a JSON string
billing_role_assignment_properties_instance = BillingRoleAssignmentProperties.from_json(json)
# print the JSON string representation of the object
print(BillingRoleAssignmentProperties.to_json())

# convert the object into a dict
billing_role_assignment_properties_dict = billing_role_assignment_properties_instance.to_dict()
# create an instance of BillingRoleAssignmentProperties from a dict
billing_role_assignment_properties_from_dict = BillingRoleAssignmentProperties.from_dict(billing_role_assignment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


