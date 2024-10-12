# BillingRoleAssignmentPayload

The payload use to update role assignment on a scope

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_role_definition_id** | **str** | The role definition id | [optional] 
**principal_id** | **str** | The user&#39;s principal id that the role gets assigned to | [optional] 

## Example

```python
from openapi_client.models.billing_role_assignment_payload import BillingRoleAssignmentPayload

# TODO update the JSON string below
json = "{}"
# create an instance of BillingRoleAssignmentPayload from a JSON string
billing_role_assignment_payload_instance = BillingRoleAssignmentPayload.from_json(json)
# print the JSON string representation of the object
print(BillingRoleAssignmentPayload.to_json())

# convert the object into a dict
billing_role_assignment_payload_dict = billing_role_assignment_payload_instance.to_dict()
# create an instance of BillingRoleAssignmentPayload from a dict
billing_role_assignment_payload_from_dict = BillingRoleAssignmentPayload.from_dict(billing_role_assignment_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


